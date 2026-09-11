/* az_local.js —— 本地模式核心（客户端合并版）
 *
 * 作用：
 *  1. 本地环回总线（window.ws）：替代原 AZTXserver.js 远程 WebSocket 服务器，
 *     登录 / 房间 / 聊天 / 画板同步 / 心跳全部在本地完成，无需 Node.js 与网络。
 *  2. 本地解析解与化简引擎（window.AZLocal.jxj）：替代原服务端 Python 化简，
 *     精确有理数运算来自 az_simplify.js（simplifier (1).html 的核心算法），
 *     非线性/函数类表达式自动回退到本地 Algebrite。
 *
 * 本文件必须在 dc.JS 之前加载（index.html 中已用 defer 保证顺序）。
 */
(function () {
  'use strict';

  /* ===================== 编解码（与 dc.JS 的 toCode/fromCode/compileStr 兼容） ===================== */

  var KEY = "~`!@#$%^&*()_+}{|?>:<,./;][-=。，‘“”’：";

  function encode(str) {
    var len = KEY.length, a = KEY.split(""), s = "", b, b1, b2, b3;
    for (var i = 0; i < str.length; i++) {
      b = str.charCodeAt(i);
      b1 = b % len; b = (b - b1) / len;
      b2 = b % len; b = (b - b2) / len;
      b3 = b % len;
      s += a[b3] + a[b2] + a[b1];
    }
    return s;
  }

  function decode(str) {
    var len = KEY.length, b1, b2, b3, d = 0, s = [];
    var n = Math.floor(str.length / 3);
    for (var i = 0; i < n; i++) {
      b1 = KEY.indexOf(str.charAt(d)); d++;
      b2 = KEY.indexOf(str.charAt(d)); d++;
      b3 = KEY.indexOf(str.charAt(d)); d++;
      s.push(b1 * len * len + b2 * len + b3);
    }
    return String.fromCharCode.apply(null, s);
  }

  function compile(code) {
    var c = String.fromCharCode(code.charCodeAt(0) + code.length);
    for (var i = 1; i < code.length; i++) {
      c += String.fromCharCode(code.charCodeAt(i) + code.charCodeAt(i - 1));
    }
    return escape(c);
  }

  function uncompile(code) {
    code = unescape(code);
    var c = String.fromCharCode(code.charCodeAt(0) - code.length);
    for (var i = 1; i < code.length; i++) {
      c += String.fromCharCode(code.charCodeAt(i) - c.charCodeAt(i - 1));
    }
    return c;
  }

  /* ===================== 本地房间 / 聊天状态 ===================== */

  var rooms = {}; // id -> { snapshot, chat: [{name, encoded}] }

  function newRoomId() {
    var id;
    do {
      id = "";
      for (var i = 0; i < 5; i++) id += Math.floor(Math.random() * 10);
    } while (rooms[id]);
    return id;
  }

  function reply(text) {
    try {
      if (typeof window.shoudaostr === "function") {
        var enc = typeof window.toCode === "function" ? window.toCode : encode;
        window.shoudaostr(enc(text));
      }
    } catch (e) { /* 忽略 */ }
  }

  /* ===================== 解析解与化简引擎 ===================== */

  var BOARD_FN_RE = /\b(gj|gz|gc|gd|gh|gs|gl|go|gi|gp|gw|gg|wt|rt)\s*\(/g;

  // 全角标点 → 半角（gj(1,0,0,0,) 这类画板函数常被手动输入）
  function normalizeExpr(expr) {
    return String(expr)
      .replace(/，/g, ",")
      .replace(/（/g, "(")
      .replace(/）/g, ")");
  }

  function matchCloseParen(s, openIdx) {
    var depth = 0;
    for (var i = openIdx; i < s.length; i++) {
      if (s.charAt(i) === "(") depth++;
      else if (s.charAt(i) === ")") {
        depth--;
        if (depth === 0) return i;
      }
    }
    return -1;
  }

  /* =====================================================================
     画板函数的符号展开（还原原服务端“解析解”的行为）：
     gj / gs / gc / gd / gh / gz / gl 等调用会被展开成【含变量符号的表达式】，
     例如 gs(x,1,0) 过点 (a,2) 与 (2,5a+3) 时返回含 a 的一次函数解析式，
     gj(1,0,0,0,) 返回交点 x 坐标关于 a 的精确表达式，而不是代入数值的小数。
     无符号解析式的函数（go/gi/gp/gw/gg/wt/rt）回退到画板数值路径 jt()。
     ===================================================================== */

  var SPECIAL_FN_RE = /(sin|cos|tan|asin|acos|atan|sinh|cosh|tanh|asinh|acosh|atanh|log|ln|exp|abs|floor|ceil|round|min|max|gamma|mod|nroot)\s*\(/i;

  function azToZc(s) {
    try {
      if (typeof window.az_to_zc === "function") return window.az_to_zc(String(s));
    } catch (e) { /* 保持原样 */ }
    return String(s);
  }

  /* nerdamer（Algebra 扩展）的 cancel/simplify 能把分式通分并约去公因式，
     例如 (5*a^2/(a-2)+3*a/(a-2)-1-4/(a-2))/(-5*a/(-a+2)-1/(-a+2))
     → (5*a^2+2*a-2)/(5*a+1)（默认分母不为 0，与 sympy.cancel 行为一致）。
     失败返回 null。 */
  function nerdamerSimplify(s) {
    try {
      if (typeof nerdamer === "undefined" || typeof nerdamer.version !== "function") return null;
      var r = nerdamer("(" + s + ")").simplify().toString().replace(/\.\.\./g, "");
      r = prettyFraction(r);
      if (r === "" || /undefined|NaN|Infinity/.test(r)) return null;
      try {
        /* 用 AZSimplify 的降幂排序把结果归一化成 (5*a^2 + 2*a - 2)/(5*a + 1) 这样的标准形式。
           仅对纯有理表达式执行：含 sin 等函数时 AZSimplify 会误拆函数名 */
        if (window.AZSimplify && !SPECIAL_FN_RE.test(r)) {
          var r2 = window.AZSimplify.simplify(r);
          if (r2 && typeof r2 === "string" && !/undefined|NaN|Infinity/.test(r2)) r = r2;
        }
      } catch (e2) { /* 保留 nerdamer 原形式 */ }
      return r;
    } catch (e) { return null; }
  }

  /* nerdamer 偶尔输出 *(...)^(-1) 形式，转回标准分式 (...)/(...) */
  function prettyFraction(s) {
    var r = String(s);
    for (var i = 0; i < 6; i++) {
      var n = r.replace(/\*\(([^()]*)\)\^\(-1\)/g, "/($1)");
      if (n === r) break;
      r = n;
    }
    return r;
  }

  function validExprResult(s) {
    return s !== null && s !== undefined && s !== "" && !/undefined|NaN|Infinity/.test(String(s));
  }

  function pickShorter(a, b) {
    if (!validExprResult(a)) return b;
    if (!validExprResult(b)) return a;
    return String(b).length < String(a).length ? b : a;
  }

  function algebriteStr(s) {
    /* 优先 nerdamer（可约分），回退 Algebrite；两者等价时取更短的形式 */
    var ner = nerdamerSimplify(s);
    var alg = null;
    try {
      var r = Algebrite.simplify(Algebrite.run("(" + s + ")")).toString().replace(/\.\.\./g, "");
      if (validExprResult(r)) alg = r;
    } catch (e) { /* 回退 */ }
    if (alg === null) {
      try { alg = Algebrite.run("(" + s + ")").toString().replace(/\.\.\./g, ""); } catch (e) { alg = "(" + s + ")"; }
    }
    var best = pickShorter(ner, alg);
    return best === null ? "(" + s + ")" : best;
  }

  function substX(f, v) {
    try {
      /* 注意 Algebrite.subst 的参数顺序是 subst(替换值, 变量, 表达式) */
      var r = Algebrite.simplify(Algebrite.subst(Algebrite.run("(" + v + ")"), "x", Algebrite.run("(" + f + ")"))).toString().replace(/\.\.\./g, "");
      if (r !== "") return r;
    } catch (e) { /* 回退 */ }
    return "(" + f + ")";
  }

  function algebriteRoots(diff) {
    var list = [];
    try {
      /* 明确指定未知数为 x：否则 Algebrite 会按字母序选变量（如 a），
         导致返回关于 a 的错误高次“根” */
      var r = Algebrite.roots(Algebrite.run(diff), "x").toString().replace(/\.\.\./g, "");
      r = r.replace(/[\[\]\(\)]/g, "");
      list = r.split(",").map(function (x) { return x.trim(); }).filter(function (x) {
        return x !== "" && x !== "..." && x !== "undefined";
      });
    } catch (e) { list = []; }
    return list;
  }

  /* 求 diff=0 关于 x 的精确根（支持含符号系数如 a）：
     一次/二次用求根公式（deg+coeff 提系数），高次仅在全数值系数时用 roots */
  function polyRootsInX(diff) {
    var e;
    try { e = Algebrite.run(diff); } catch (e2) { return []; }
    var deg = NaN;
    try { deg = parseInt(Algebrite.deg(e, "x").toString(), 10); } catch (e3) { }
    if (!isNaN(deg)) {
      try {
        var c1 = Algebrite.coeff(e, "x", 1).toString();
        var c0 = Algebrite.coeff(e, "x", 0).toString();
        if (deg === 1) {
          if (c1 === "0" || c1 === "") return [];
          return [algebriteStr("-(" + c0 + ")/(" + c1 + ")")];
        }
        if (deg === 2) {
          var a2 = Algebrite.coeff(e, "x", 2).toString();
          var sq = algebriteStr("sqrt((" + c1 + ")^2-4*(" + a2 + ")*(" + c0 + "))");
          return [
            algebriteStr("(-(" + c1 + ")+(" + sq + "))/(2*(" + a2 + "))"),
            algebriteStr("(-(" + c1 + ")-(" + sq + "))/(2*(" + a2 + "))")
          ];
        }
        if (deg > 2) {
          var allNum = true;
          for (var ci = 0; ci <= deg; ci++) {
            var cv = Algebrite.coeff(e, "x", ci).toString().trim();
            if (!/^-?\d+(\.\d+)?(\/-?\d+(\.\d+)?)?$/.test(cv)) { allNum = false; break; }
          }
          if (allNum) return algebriteRoots(diff);
          return []; // 含符号的高次：无通用精确公式 → 数值回退
        }
      } catch (e4) { /* 落到 roots */ }
    }
    return algebriteRoots(diff);
  }

  function splitTopLevel(s) {
    var parts = [], depth = 0, cur = "";
    for (var i = 0; i < s.length; i++) {
      var ch = s.charAt(i);
      if (ch === "(") depth++;
      else if (ch === ")") depth--;
      if (ch === "," && depth === 0) { parts.push(cur); cur = ""; }
      else cur += ch;
    }
    parts.push(cur);
    return parts;
  }

  // 曲线 h 的解析式（符号展开 + az→zc）。竖直线/极坐标返回特殊标记。
  function curveZc(h) {
    var data = String(hslb[h]).split("|");
    var raw = data[0] || "";
    if (raw.substring(0, 2) === "x:") return { vertical: true, x: azToZc(raw.substring(2)) };
    if (raw.substring(0, 2) === "r:") {
      /* 极坐标圆 r:圆心x;圆心y;半径 —— 各部分可含变量/画板引用，全部符号展开 */
      var parts = raw.substring(2).split(";");
      var circle = {};
      var keys = ["a", "b", "r"];
      for (var pi = 0; pi < 3; pi++) {
        var pex = expandSymbolic(parts[pi] === undefined ? "0" : parts[pi], 0);
        if (pex.failed) return { fail: pex.failed };
        circle[keys[pi]] = azToZc(pex.expr);
      }
      return { polar: true, circle: circle };
    }
    var ex = expandSymbolic(raw, 0);
    if (ex.failed) return { fail: ex.failed };
    return { expr: azToZc(ex.expr) };
  }

  /* 圆与圆 / 圆与曲线 / 圆与竖直线的符号交点 */
  function dispatchGjPolar(c1, c2, k, xy, inner) {
    // 双圆：标准根式公式，k=0 取“-”分支，k=1 取“+”分支（与画板数值顺序一致）
    if (c1.polar && c2.polar) {
      var A = c1.circle, B = c2.circle;
      var dx = "(" + B.a + ")-(" + A.a + ")";
      var dy = "(" + B.b + ")-(" + A.b + ")";
      var D2 = algebriteStr("(" + dx + ")^2+(" + dy + ")^2");
      var D = algebriteStr("sqrt(" + D2 + ")");
      var xp = algebriteStr("((" + A.r + ")^2-(" + B.r + ")^2+(" + D2 + "))/(2*(" + D + "))");
      var h2s = algebriteStr("(" + A.r + ")^2-(" + xp + ")^2");
      var h = algebriteStr("sqrt(" + h2s + ")");
      var px = algebriteStr("(" + A.a + ")+(" + xp + ")*(" + dx + ")/(" + D + ")");
      var py = algebriteStr("(" + A.b + ")+(" + xp + ")*(" + dy + ")/(" + D + ")");
      if (xy === 2) {
        var hn = parseFloat(h2s);
        if (!isNaN(hn)) return { sym: String(hn > 1e-12 ? 2 : (hn > -1e-12 ? 1 : 0)) };
        return { sym: "2" };
      }
      if (k > 1) return null; // 圆最多两个交点：数值回退
      var perpX = algebriteStr("(" + h + ")*(" + dy + ")/(" + D + ")");
      var perpY = algebriteStr("(" + h + ")*(" + dx + ")/(" + D + ")");
      if (xy === 0) return { sym: k === 0 ? algebriteStr("(" + px + ")-(" + perpX + ")") : algebriteStr("(" + px + ")+(" + perpX + ")") };
      return { sym: k === 0 ? algebriteStr("(" + py + ")+(" + perpY + ")") : algebriteStr("(" + py + ")-(" + perpY + ")") };
    }
    // 圆 与 普通曲线 f(x)：代入圆方程 (x-a)^2+(f-b)^2-r^2=0
    var pc = c1.polar ? c1 : c2;
    var fn = c1.polar ? c2 : c1;
    if (fn.vertical) { // 圆与竖直线 x=c：y = b ± sqrt(r^2-(c-a)^2)
      var ca = pc.circle.a, cb = pc.circle.b, cr = pc.circle.r;
      var h2v = algebriteStr("(" + cr + ")^2-((x)-(" + ca + "))^2");
      var hv = algebriteStr("sqrt(" + substX(h2v, fn.x) + ")");
      if (xy === 0) return { sym: "(" + fn.x + ")" };
      var sgn = k === 0 ? "-" : "+";
      return { sym: algebriteStr("(" + cb + ")-(" + sgn + "1)*(" + hv + ")") };
    }
    var diff = "(x-(" + pc.circle.a + "))^2+(((" + fn.expr + "))-(" + pc.circle.b + "))^2-(" + pc.circle.r + ")^2";
    var roots = polyRootsInX(diff);
    if (roots.length === 0) return null; // 无精确解析根：数值回退
    if (xy === 2) return { sym: String(roots.length) };
    if (k >= roots.length) return null; // 该序号交点不存在：数值回退
    var rk = roots[k];
    if (xy === 0) return { sym: "(" + rk + ")" };
    return { sym: substX(fn.expr, rk) };
  }

  // 点 d 的第 xy 个坐标（0=x，1=y），符号展开
  function ptCoord(d, xy) {
    if (!dlb[d]) return null;
    var coord = String(dlb[d]).split("|")[xy] || "";
    var ex = expandSymbolic(coord, 0);
    if (ex.failed) return null;
    return { sym: algebriteStr(azToZc(ex.expr)) };
  }

  function numericFallback(name, inner) {
    if (typeof window.jt === "function") {
      try {
        var v = window.jt(name, inner);
        if (v === undefined || v === false || v === null || (typeof v === "number" && !isFinite(v))) {
          return { fail: name + "(" + inner + ")：未找到结果（请确认引用的曲线/点/圆/变量存在）" };
        }
        return { sym: "(" + String(v) + ")" };
      } catch (e) { /* 落到失败 */ }
    }
    return { fail: name + "(" + inner + ")：无法计算（请确认画板中存在引用的对象）" };
  }

  function dispatchGs(args, inner) {
    // gs(求值点, 点1, 点2, ... [, 'h'])：求值点为 x（或省略/数值），'h' 表示返回解析式
    var evalAt = args[0] === undefined ? "x" : String(args[0]).trim();
    var ptIdx = [], flagH = false;
    for (var i = 1; i < args.length; i++) {
      var t = String(args[i] == null ? "" : args[i]).trim();
      if (t === "") continue;
      if (t === "h" || t === "H") { flagH = true; continue; }
      var n = parseInt(t, 10);
      if (isNaN(n) || !dlb[n]) return { fail: "gs(" + inner + ")：点 " + t + " 不存在" };
      ptIdx.push(n);
    }
    if (ptIdx.length < 2) return { fail: "gs(" + inner + ")：至少需要两个点" };
    var xs = [], ys = [];
    for (var j = 0; j < ptIdx.length; j++) {
      var px = ptCoord(ptIdx[j], 0), py = ptCoord(ptIdx[j], 1);
      if (!px || !py) return null; // 数值回退
      xs.push(px.sym); ys.push(py.sym);
    }
    var scsz;
    if (ptIdx.length === 2) { // 一次函数：k*x+b（保留符号）
      var k = algebriteStr("((" + ys[0] + ")-(" + ys[1] + "))/((" + xs[0] + ")-(" + xs[1] + "))");
      var b = algebriteStr("((" + xs[1] + ")*(" + ys[0] + ")-(" + xs[0] + ")*(" + ys[1] + "))/((" + xs[1] + ")-(" + xs[0] + "))");
      scsz = "(" + k + ")*x+" + "(" + b + ")";
    } else { // 过 n 点：拉格朗日插值（符号）
      var terms = [];
      for (var i2 = 0; i2 < ptIdx.length; i2++) {
        var prod = "";
        for (var j2 = 0; j2 < ptIdx.length; j2++) {
          if (j2 === i2) continue;
          prod += "*((x)-(" + xs[j2] + "))/((" + xs[i2] + ")-(" + xs[j2] + "))";
        }
        terms.push("((" + ys[i2] + ")*(1" + prod + "))");
      }
      scsz = algebriteStr(terms.join("+"));
    }
    if (flagH || evalAt === "x" || evalAt === "") return { sym: scsz };
    return { sym: substX(scsz, evalAt) };
  }

  function dispatchGj(args, inner) {
    // gj(曲线1, 曲线2, 第几个交点, 0取x/1取y/2取个数 [, 精度])
    function idx(i) { var v = parseInt(String(args[i] == null ? "" : args[i]).trim(), 10); return isNaN(v) ? null : v; }
    var h1 = idx(0), h2 = idx(1), k = idx(2), xy = idx(3);
    if (h1 === null || h2 === null || k === null || xy === null) return null;
    if (!hslb[h1]) return { fail: "gj(" + inner + ")：曲线 " + h1 + " 不存在" };
    if (!hslb[h2]) return { fail: "gj(" + inner + ")：曲线 " + h2 + " 不存在" };
    var c1 = curveZc(h1), c2 = curveZc(h2);
    if (c1.fail) return { fail: c1.fail };
    if (c2.fail) return { fail: c2.fail };
    // 竖直线 x=c 与普通曲线
    if (c1.vertical || c2.vertical) {
      var vline = c1.vertical ? c1 : c2;
      var other = c1.vertical ? c2 : c1;
      if (other.vertical || other.expr === undefined) return null; // 双竖线/极坐标：数值回退
      if (xy === 0) return { sym: "(" + vline.x + ")" };
      if (xy === 1) return { sym: substX(other.expr, vline.x) };
      return null;
    }
    if (c1.polar || c2.polar || c1.expr === undefined || c2.expr === undefined) return null; // 极坐标圆：数值回退
    var diff = "(" + c1.expr + ")-(" + c2.expr + ")";
    var roots = polyRootsInX(diff);
    if (roots.length === 0) return null; // 无精确解析根：数值回退
    if (xy === 2) return { sym: String(roots.length) };
    if (k >= roots.length) return null; // 该序号交点不存在：数值回退
    var r = roots[k];
    if (xy === 0) return { sym: "(" + r + ")" };
    return { sym: substX(c1.expr, r) };
  }

  // 单个画板函数调用 → 符号结果；返回 {sym} / {fail} / null（回退数值路径）
  function dispatchBoardFn(name, args, inner) {
    function idx(i) { var v = parseInt(String(args[i] == null ? "" : args[i]).trim(), 10); return isNaN(v) ? null : v; }

    if (name === "gc") { // gc(变量编号, xy)：变量 → 变量名符号（含 a 的表达式由此而来）
      var c = idx(0);
      if (c === null || !cllb[c]) return null;
      return { sym: String(cllb[c]).split("|")[0] };
    }
    if (name === "gd") { // gd(点编号, xy)：点的坐标表达式
      var d = idx(0), xy = idx(1);
      if (d === null || xy === null || !dlb[d]) return null;
      var pc = ptCoord(d, xy);
      return pc ? pc : null;
    }
    if (name === "gh") { // gh(曲线编号)：曲线的解析式（符号）
      var h = idx(0);
      if (h === null || !hslb[h]) return null;
      var ce = curveZc(h);
      if (ce.fail) return { fail: ce.fail };
      if (ce.expr === undefined) return null;
      return { sym: ce.expr };
    }
    if (name === "gz") { // gz(曲线编号, 变量编号, x值?)：曲线在 x=值/变量 处的值
      var h2 = idx(0);
      if (h2 === null || !hslb[h2]) return null;
      var ce2 = curveZc(h2);
      if (ce2.fail) return { fail: ce2.fail };
      if (ce2.expr === undefined) return null;
      var yv = args[2] === undefined ? "" : String(args[2]).trim();
      if (yv !== "") return { sym: substX(ce2.expr, yv) };
      var vi = idx(1);
      if (vi !== null && cllb[vi]) return { sym: substX(ce2.expr, String(cllb[vi]).split("|")[0]) };
      return { sym: ce2.expr };
    }
    if (name === "gs") return dispatchGs(args, inner);
    if (name === "gj") return dispatchGj(args, inner);
    if (name === "gl") { // gl(点1, 点2)：两点距离（符号）
      var d1 = idx(0), d2 = idx(1);
      if (d1 === null || d2 === null || !dlb[d1] || !dlb[d2]) return null;
      var p1x = ptCoord(d1, 0), p1y = ptCoord(d1, 1), p2x = ptCoord(d2, 0), p2y = ptCoord(d2, 1);
      if (!p1x || !p1y || !p2x || !p2y) return null;
      return { sym: algebriteStr("sqrt((" + p1x.sym + "-(" + p2x.sym + "))^2+(" + p1y.sym + "-(" + p2y.sym + "))^2)") };
    }
    return null; // go/gi/gp/gw/gg/wt/rt：数值回退
  }

  function expandSymbolic(expr, depth) {
    var s = String(expr);
    if (depth > 10) return { expr: s };
    for (var guard = 0; guard < 200; guard++) {
      BOARD_FN_RE.lastIndex = 0;
      var found = null, mm;
      while ((mm = BOARD_FN_RE.exec(s)) !== null) {
        var o = mm.index + mm[0].length - 1;
        var c = matchCloseParen(s, o);
        if (c === -1) continue;
        found = { start: mm.index, open: o, close: c, name: mm[1], inner: s.substring(o + 1, c) };
        break;
      }
      if (!found) break;
      var args, res;
      try {
        args = splitTopLevel(found.inner).map(function (a) {
          var r = expandSymbolic(a, depth + 1);
          if (r.failed) throw { azfail: r.failed };
          return r.expr;
        });
        res = dispatchBoardFn(found.name, args, found.inner);
      } catch (e) {
        if (e && e.azfail) return { failed: e.azfail };
        res = null;
      }
      if (res === null) {
        // 无法符号展开：先尝试画板数值路径（保持原服务端行为）
        var nf = numericFallback(found.name, found.inner);
        if (nf.sym) {
          s = s.substring(0, found.start) + nf.sym + s.substring(found.close + 1);
          continue;
        }
        /* 数值也不可用：保留原文但暂蔽首字母防止重复匹配，结束时必须原样还原
           （此前直接删除字符会把 gj(...) 变成 j(...) 导致语法错误） */
        s = s.substring(0, found.start) + "\u0001" + found.name.charAt(0) + s.substring(found.start + 1);
        continue;
      }
      if (res.fail) return { failed: res.fail };
      s = s.substring(0, found.start) + "(" + res.sym + ")" + s.substring(found.close + 1);
    }
    /* 还原被暂蔽的字符 */
    return { expr: s.replace(/\u0001(.)/g, "$1") };
  }

  /* 把表达式中的画板函数调用展开（符号优先，数值回退）。
     返回 { expr, failed }，failed 为展开失败时的说明。 */
  function expandBoardFunctions(expr) {
    if (typeof Algebrite === "undefined" ||
        typeof hslb === "undefined" || typeof cllb === "undefined" || typeof dlb === "undefined") {
      return { expr: expr, failed: null };
    }
    try {
      var r = expandSymbolic(expr, 0);
      /* 展开结果统一转为标准语法（az→zc），后续化简/求解直接可用 */
      return { expr: azToZc(r.expr), failed: r.failed || null };
    } catch (e) {
      return { expr: expr, failed: null };
    }
  }

  function fracStr(f) {
    return f.d === 1n ? String(f.n) : f.n + "/" + f.d;
  }

  function astHasVar(node) {
    switch (node.type) {
      case "var": return true;
      case "add": return node.terms.some(astHasVar);
      case "mul": return node.factors.some(astHasVar);
      case "pow": return astHasVar(node.base) || astHasVar(node.exp);
      default: return false;
    }
  }

  // 把已化简的 AST 拆成线性系数；不是线性的返回 null
  function linearCoeffs(node) {
    var terms = node.type === "add" ? node.terms.slice() : [node];
    var coeffs = {};
    var constant = new Frac(0);
    for (var i = 0; i < terms.length; i++) {
      var sc = splitCoeff(terms[i]);
      var exps = sc.monomial ? varExponents(sc.monomial) : new Map();
      var keys = Array.from(exps.keys());
      if (keys.length === 0) {
        if (sc.monomial && astHasVar(sc.monomial)) return null; // sqrt(x) 等
        constant = constant.add(sc.coef);
        continue;
      }
      if (keys.length !== 1) return null;
      if (exps.get(keys[0]) !== 1) return null;
      var k = keys[0];
      coeffs[k] = coeffs[k] ? coeffs[k].add(sc.coef) : sc.coef;
    }
    return { coeffs: coeffs, constant: constant };
  }

  // 用 Frac 做高斯消元，A 为 n×n，b 为 n
  function solveLinearSystem(A, b) {
    var n = b.length;
    for (var col = 0; col < n; col++) {
      var piv = -1;
      for (var row = col; row < n; row++) {
        if (!A[row][col].isZero()) { piv = row; break; }
      }
      if (piv === -1) return null; // 无唯一解
      if (piv !== col) {
        var t = A[piv]; A[piv] = A[col]; A[col] = t;
        var tb = b[piv]; b[piv] = b[col]; b[col] = tb;
      }
      var p = A[col][col];
      for (var j = col; j < n; j++) A[col][j] = A[col][j].div(p);
      b[col] = b[col].div(p);
      for (var r = 0; r < n; r++) {
        if (r === col || A[r][col].isZero()) continue;
        var f = A[r][col];
        for (var j2 = col; j2 < n; j2++) A[r][j2] = A[r][j2].sub(f.mul(A[col][j2]));
        b[r] = b[r].sub(f.mul(b[col]));
      }
    }
    return b;
  }

  function collectASTVars(node, set) {
    switch (node.type) {
      case "var": set.add(node.name); break;
      case "add": node.terms.forEach(function (t) { collectASTVars(t, set); }); break;
      case "mul": node.factors.forEach(function (t) { collectASTVars(t, set); }); break;
      case "pow": collectASTVars(node.base, set); collectASTVars(node.exp, set); break;
    }
  }

  function parseToSimplified(expr) {
    var tokens = tokenize(String(expr).replace(/\s+/g, ""));
    if (!tokens || tokens.length === 0) throw new Error("空表达式");
    return simplify(parse(tokens));
  }

  function simplifyExpr(expr) {
    expr = normalizeExpr(expr);
    var ex = expandBoardFunctions(expr);
    if (ex.failed) return "无法计算 " + ex.failed;
    expr = ex.expr;
    // 纯数值优先精确求值，不能按字符串长度选回未展开的幂/阶乘。
    // 小数字面量先转为有理数，避免 Algebrite 将其作为浮点数计算。
    if (/^[\d\s.+\-*/^()!]+$/.test(expr) && /\d/.test(expr)) {
      try {
        var exactInput = expr.replace(/(?:\d+\.\d*|\.\d+)/g, function (s) {
          var parts = s.split(".");
          return "(" + (parts[0] || "0") + parts[1] + "/1" + "0".repeat(parts[1].length) + ")";
        });
        var exact = Algebrite.run("(" + exactInput + ")").toString();
        if (/^-?\d+(?:\s*\/\s*\d+)?$/.test(exact)) return exact;
      } catch (e) { /* 非有理数或不支持的语法继续走符号化简 */ }
    }
    var r = null;
    // 含函数名或 az 语法符号（“_”）时，跳过纯有理数化简器，
    // 避免把 sin(x) 误当作隐式乘法
    var special = SPECIAL_FN_RE.test(String(expr)) || String(expr).indexOf("_") !== -1;
    if (!special) {
      try {
        if (window.AZSimplify) r = window.AZSimplify.simplify(expr);
      } catch (e) { r = null; }
    }
    /* nerdamer（Algebra 扩展）：分式通分约简能力最强（对齐 sympy.cancel），
       与 AZSimplify 结果比较取更短形式 */
    try {
      if (window.AZServerJX && typeof window.AZServerJX.cancelFraction === "function") {
        r = pickShorter(r, window.AZServerJX.cancelFraction(expr));
      }
    } catch (e3) { }
    r = pickShorter(r, nerdamerSimplify(expr));
    if (r !== null && r !== undefined && r !== "") return r;
    try {
      var q = Algebrite.simplify(Algebrite.rationalize(expr)).toString().replace(/\.\.\./g, "");
      if (q !== "") return q;
    } catch (e) { /* 继续回退 */ }
    try {
      var a = Algebrite.simplify(expr).toString().replace(/\.\.\./g, "");
      if (a !== "") return a;
    } catch (e) { /* 继续回退 */ }
    try { return Algebrite.run(expr).toString().replace(/\.\.\./g, ""); } catch (e) { return String(expr); }
  }

  // 单个方程求解：f = 0，返回 "x = ..." 行或 null
  function solveSingleEquation(f) {
    var r = Algebrite.roots(Algebrite.run(f)).toString().replace(/\.\.\./g, "");
    r = r.replace(/[\[\]()]/g, "");
    var list = r.split(",").map(function (s) { return s.trim(); }).filter(function (s) {
      return s !== "" && s !== "..." && s !== "undefined";
    });
    if (list.length === 0) return null;
    var v = "x";
    try {
      var st = parseToSimplified(f), vs = new Set(); collectASTVars(st, vs);
      if (vs.size === 1) v = Array.from(vs)[0];
    } catch (e) { /* 默认 x */ }
    return list.map(function (root) { return v + " = " + root; }).join("\n");
  }

  // 主入口：等式组 → 解析解；普通表达式 → 化简
  function jxj(expr, snp) {
    try {
      expr = normalizeExpr(expr).trim();
      if (expr === "") return "";
      if (expr.indexOf("=") !== -1) return solveEquations(expr);
      /* 优先使用移植自 serverdesktop\AZTXserver2.js 的原服务端解析解引擎（az_server_jx.js），
         仅其化简部分已按要求换成本地化简器。失败时回退到本地符号展开引擎。 */
      if (window.AZServerJX && typeof window.AZServerJX.jxj === "function") {
        try {
          var q = window.AZServerJX.jxj(expr, snp);
          if (typeof q === "string" && q !== "" && q !== "err" && q !== "undefined") return q;
        } catch (e2) { /* 回退 */ }
      }
      var ex = expandBoardFunctions(expr);
      if (ex.failed) return "无法计算 " + ex.failed;
      expr = ex.expr;
      return simplifyExpr(expr);
    } catch (e) {
      return "错误：" + (e && e.message ? e.message : e);
    }
  }

  function solveEquations(expr) {
    var eqs = expr.split(/[,，;；]/).map(function (s) { return s.trim(); }).filter(Boolean);
    if (eqs.length === 0) return "";

    var lin = [], varSet = new Set(), ok = eqs.length > 0;
    for (var i = 0; i < eqs.length; i++) {
      var eq = eqs[i];
      var p = eq.indexOf("=");
      if (p === -1) { ok = false; break; }
      var f = "(" + eq.substring(0, p) + ")-(" + eq.substring(p + 1) + ")";
      try {
        var st = parseToSimplified(f);
        var lc = linearCoeffs(st);
        if (!lc) { ok = false; break; }
        collectASTVars(st, varSet);
        lin.push(lc);
      } catch (e) { ok = false; break; }
    }

    var names = Array.from(varSet).sort();

    // 线性方程组（方程数 = 未知数个数）
    if (ok && lin.length === names.length && names.length >= 1) {
      var A = [], b = [];
      for (var r = 0; r < lin.length; r++) {
        var row = [];
        for (var c = 0; c < names.length; c++) {
          row.push(lin[r].coeffs[names[c]] || new Frac(0));
        }
        A.push(row);
        b.push(lin[r].constant.neg());
      }
      var sol = solveLinearSystem(A, b);
      if (sol) {
        return names.map(function (n, k) { return n + " = " + fracStr(sol[k]); }).join("\n");
      }
    }

    // 单方程：交给 Algebrite 求精确根
    if (eqs.length === 1) {
      var p1 = eqs[0].indexOf("=");
      var f1 = "(" + eqs[0].substring(0, p1) + ")-(" + eqs[0].substring(p1 + 1) + ")";
      var res = solveSingleEquation(f1);
      if (res) return res;
      return simplifyExpr(f1) + " = 0";
    }

    // 多方程非线性：逐条整理为 f = 0
    return eqs.map(function (eq) {
      var p2 = eq.indexOf("=");
      var f2 = "(" + eq.substring(0, p2) + ")-(" + eq.substring(p2 + 1) + ")";
      return simplifyExpr(f2) + " = 0";
    }).join("\n");
  }

  /* ===================== 环回总线（替代远程服务器） ===================== */

  function route(msg) {
    var head = msg.substring(0, 2);

    if (msg === "zc" || head === "zc") {
      reply("true|local|0|本地用户|true");
      return;
    }
    if (head === "dl") {
      var u = msg.substring(2).split("|")[0] || "本地用户";
      reply("true|local|0|" + u + "|true");
      return;
    }
    if (head === "jx") { // 旧协议兜底：直接走本地引擎
      var parts = msg.substring(2).split("و³");
      reply("jsjxj" + jxj(parts[3], parts[4]));
      return;
    }
    if (head === "xj") { // 新建房间
      var snapshot = msg.substring(2);
      var id = newRoomId();
      rooms[id] = { snapshot: snapshot || "", chat: [] };
      reply("yourQZ:" + id);
      return;
    }
    if (head === "jo") { // 加入房间
      var rid = msg.substring(2).split("|")[0];
      var room = rooms[rid];
      reply(room ? "CG" + (room.snapshot || "") : "BCG");
      return;
    }
    if (head === "fb") { // 广播画板（本地单人不转发，仅记录快照）
      var rest = msg.substring(2);
      var fid = rest.substring(0, 5);
      var data = rest.substring(5);
      if (rooms[fid]) rooms[fid].snapshot = data;
      reply("gl" + data);
      return;
    }
    if (head === "fx") { // 聊天
      var frest = msg.substring(2);
      var frid = frest.substring(0, 5);
      var payload = frest.substring(5);
      if (rooms[frid]) {
        var pp = payload.split("|");
        rooms[frid].chat.push({ name: pp[1] || "", encoded: pp[2] || "" });
        if (rooms[frid].chat.length > 100) rooms[frid].chat.shift();
      }
      reply("sx" + payload);
      return;
    }
    if (head === "ml") { // 聊天历史
      var mp = msg.substring(2).split("|");
      var mroom = rooms[mp[0]];
      var count = Number(mp[1]) || 25;
      if (mroom) {
        var h = "hl";
        var list = mroom.chat.slice(-count);
        for (var k = 0; k < list.length; k++) {
          h += list[k].name + "|" + list[k].encoded + "锟斤拷";
        }
        reply(h);
      }
      return;
    }
    if (head === "js") { // 远程执行已禁用（安全）
      reply("false");
      return;
    }
    // dd（心跳）/ nj / lh / fx 之外的消息：本地无需处理
  }

  var bus = {
    send: function (raw) {
      setTimeout(function () {
        try {
          /* 优先使用 dc.JS 的全局编解码函数，保证与 qianzhi 的编码完全一致
             （dc.JS 以非 UTF-8 编码保存，其密钥串与本地副本可能不一致） */
          var dec = typeof window.fromCode === "function" ? window.fromCode : decode;
          var unc = typeof window.unCompileStr === "function" ? window.unCompileStr : uncompile;
          var msg = dec(raw);
          if (msg.substring(0, 2) === "dt") msg = unc(msg.substring(2));
          route(msg);
        } catch (e) { console.error("AZLocal 总线消息处理失败：", e); }
      }, 0);
    },
    close: function () { },
    onopen: null,
    onmessage: null,
    onclose: null
  };

  // 暴露给 dc.JS（其中 qianzhi 使用 ws.send）
  window.ws = bus;

  // 自动登录（本地模式默认解锁全部功能）
  window.addEventListener("load", function () {
    setTimeout(function () {
      var logged = false;
      try { logged = (typeof v_i_p !== "undefined" && v_i_p[0] === true); } catch (e) { logged = false; }
      if (!logged) reply("true|local|0|本地用户|true");
    }, 50);
  });

  /* ===================== 对外接口 ===================== */
  window.AZLocal = {
    jxj: jxj,
    simplify: simplifyExpr,
    solve: solveEquations,
    expand: expandBoardFunctions,
    // 供 dc.JS 的 qianzhi 直接调用（明文派发，绕过远程编码协议）
    receive: function (msg) {
      setTimeout(function () {
        try { route(String(msg)); } catch (e) { console.error("AZLocal 总线消息处理失败：", e); }
      }, 0);
    }
  };
})();

