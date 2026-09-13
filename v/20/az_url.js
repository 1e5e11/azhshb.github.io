/* az_url.js —— URL 传值标准（分享链接）
 *
 * 主项目 index.html 支持以下 URL 参数（全部可选，可任意组合）：
 *
 *  曲线（最多 9 条）：
 *    f1、f2 … f9      曲线解析式（标准数学语法，如 sin(x)/x）
 *    c1、c2 … c9      对应颜色（颜色名 red/blue… 或 #rrggbb）
 *    r1、r2 … r9      对应取值范围，格式 “下限:上限”，如 -5:5
 *  快捷写法：f=… / c=… / r=… 等价于 f1=… / c1=… / r1=…
 *
 *  点（最多 9 个）：
 *    p1、p2 … p9      点坐标，格式 “x,y”，如 3,2
 *
 *  视图与画板：
 *    x、y             坐标系原点位置（像素）
 *    z                缩放（原 20 即 1:1）
 *    w、h             显示宽 / 高（像素）
 *    g                绘制精度（点数，默认 100）
 *
 *  其它：
 *    t                页面标题
 *    azx              保存码（“保存”按钮生成的 LZString 压缩串），
 *                     打开时自动恢复整个画板
 *    calc             表达式：填入“啊这计算器”并打开该面板
 *    calcxj           表达式：填入并自动执行“计算解析解并化简”
 *
 * 示例：
 *   index.html?f=sin(x)/x&c=blue
 *   index.html?f1=x^2&f2=-x&c1=red&c2=green&z=40&x=400&y=300
 *   index.html?p1=1,2&p2=3,4
 *   index.html?calcxj=x^2=4
 *   index.html?f1=x^2&f2=1&calcxj=gj(1,0,0,0,)
 */
(function () {
  'use strict';

  // 自行解析查询串（decodeURIComponent 不会把 “+” 误转为空格，
  // 这样 index.html?f=x+1 这类未编码链接也能正确工作）
  function getQuery() {
    var map = Object.create(null);
    var s = location.search.replace(/^\?/, "");
    if (!s) return map;
    s.split("&").forEach(function (kv) {
      if (!kv) return;
      var i = kv.indexOf("=");
      var k, v;
      if (i === -1) { k = kv; v = ""; }
      else { k = kv.substring(0, i); v = kv.substring(i + 1); }
      try { k = decodeURIComponent(k); } catch (e) { }
      try { v = decodeURIComponent(v); } catch (e) { }
      map[k] = v;
    });
    return map;
  }

  function ready(fn) {
    if (document.readyState !== 'loading') { setTimeout(fn, 0); }
    else { document.addEventListener('DOMContentLoaded', fn); }
  }

  ready(function () {
    var q = getQuery();
    if (!Object.keys(q).length) return;

    // 标题
    var t = q['t'];
    if (t) {
      document.title = t;
    }

    // 保存码优先：恢复后仍允许再叠加 f/p 参数
    var azx = q['azx'];
    if (azx) {
      try {
        var box = document.getElementById('klkl');
        if (box) box.value = azx;
        if (typeof huif === 'function') huif();
      } catch (e) { console.error('恢复保存码失败', e); }
    }

    // 视图参数
    function setv(id, v) {
      var el = document.getElementById(id);
      if (el && v !== undefined && v !== null && v.trim() !== '' && Number.isFinite(Number(v))) {
        if (['fvfrv', 'bhcv', 'edsde', 'gdrft'].indexOf(id) !== -1 && Number(v) <= 0) return;
        el.value = v;
        hasView = true;
      }
    }
    var hasView = false;
    setv('decsx', q['x']);
    setv('decsy', q['y']);
    setv('fvfrv', q['z']);
    setv('bhcv', q['w']);
    setv('edsde', q['h']);
    setv('gdrft', q['g']);
    if (hasView) {
      try { if (typeof zhudbianhua === 'function') zhudbianhua(); } catch (e) { }
    }

    // 曲线 f1..f9（含 f 快捷）
    for (var i = 1; i <= 9; i++) {
      var expr = q['f' + i] !== undefined ? q['f' + i] : (i === 1 ? q['f'] : undefined);
      if (!expr) continue;
      var color = q['c' + i] !== undefined ? q['c' + i] : (i === 1 ? q['c'] : undefined) || 'black';
      var range = q['r' + i] !== undefined ? q['r' + i] : (i === 1 ? q['r'] : undefined) || '';
      var lo = '', hi = '';
      if (range && range.indexOf(':') !== -1) {
        var rr = range.split(':');
        lo = rr[0]; hi = rr[1];
      }
      try {
        if (typeof cjxhs === 'function') {
          cjxhs(expr, color, lo, hi, 1);
        }
      } catch (e) { console.error('加载曲线失败：' + expr, e); }
    }

    // 点 p1..p9
    for (var j = 1; j <= 9; j++) {
      var pk = 'p' + j;
      var pt = q[pk];
      if (!pt) continue;
      var xy = pt.split(',');
      if (xy.length >= 2 && typeof xjdian === 'function') {
        try { xjdian(xy[0], xy[1], q[pk + 'n'] || ''); } catch (e) { }
      }
    }

    // 重绘
    try { if (typeof huizhi === 'function' && typeof TBxx === 'function') { huizhi(); TBxx(); } } catch (e) { }

    // 计算器：calc=表达式（填入并打开计算器） / calcxj=表达式（填入并自动执行“计算解析解并化简”）
    var calc = q['calc'] !== undefined ? q['calc'] : q['calcxj'];
    if (calc !== undefined) {
      try {
        if (typeof gnqh === 'function') gnqh('gn3');
        var box = document.getElementById('cddddcdcdcdc');
        if (box) box.value = calc;
      } catch (e) { }
      if (q['calcxj'] !== undefined) {
        // 等自动登录（window load）完成后再执行
        var calculate = function () {
          setTimeout(function () {
            try { azfy('jxj_bhj'); } catch (e) { console.error('自动计算失败', e); }
          }, 300);
        };
        if (document.readyState === 'complete') calculate();
        else window.addEventListener('load', calculate, { once: true });
      }
    }
  });
})();
