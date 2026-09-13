/* Exact straightedge/compass expressions. Shared definitions keep deeply nested
 * constructions linear in size instead of repeatedly expanding every ancestor. */
(function () {
  'use strict';
  function solve(input) {
    if (!/\b(?:getcl|getdzb|getjd|gethsz|getjxs|getjl|getcx|getpxx|gc|gd|gj|gz|gs|gl|gw|gg)\s*\(/i.test(input)) return null;
    var definitions = [], memo = new Map(), busy = new Set(), values = new Map();
    var used = new Set(cllb.map(function (row) { return row.split('|')[0]; }));
    var serial = 0;
    function unsupported(message) { var error = new Error(message); error.code = 'UNSUPPORTED_GEOMETRY'; throw error; }
    function expr(s, precedence) {
      s = String(s);
      if (s.length > 100000) throw new Error('表达式过大');
      var v;
      try { v = Number(math.evaluate(s, values)); } catch (e) { v = NaN; }
      return { s: s, v: v, p: precedence == null ? (/^-\d+$/.test(s) ? 3 : 4) : precedence };
    }
    function integer(e) {
      return /^-?\d+$/.test(e.s) ? BigInt(e.s) : null;
    }
    function exactInteger(a, sign, b) {
      var av = integer(a), bv = integer(b), value;
      if (av === null || bv === null) return null;
      if (sign === '+') value = av + bv;
      else if (sign === '-') value = av - bv;
      else if (sign === '*') value = av * bv;
      else if (sign === '/' && bv !== 0n && av % bv === 0n) value = av / bv;
      else if (sign === '^' && bv >= 0n && bv <= 1000n) value = av ** bv;
      else return null;
      return expr(value.toString());
    }
    function operand(e, sign, right) {
      var precedence = sign === '+' || sign === '-' ? 1 : sign === '*' || sign === '/' ? 2 : 3;
      var wrap = e.p < precedence ||
        (right && sign === '-' && e.p <= precedence) ||
        (right && sign === '/' && e.p <= precedence) ||
        (sign === '^' && e.p <= precedence);
      return wrap ? '(' + e.s + ')' : e.s;
    }
    function op(a, sign, b) {
      var folded = exactInteger(a, sign, b);
      if (folded) return folded;
      if (sign === '+' && a.s === '0') return b;
      if ((sign === '+' || sign === '-') && b.s === '0') return a;
      if (sign === '*' && (a.s === '0' || b.s === '0')) return expr('0');
      if ((sign === '*' || sign === '/') && b.s === '1') return a;
      if (sign === '*' && a.s === '1') return b;
      if (sign === '-' && a.s === b.s) return expr('0');
      // Prefer y-4 to -4+y. Besides being shorter, this preserves the
      // recognizable geometric form inside powers and square roots.
      if (sign === '+') {
        var ai = integer(a), bi = integer(b);
        if (ai !== null && ai < 0n) return op(b, '-', expr((-ai).toString()));
        if (bi !== null && bi < 0n) return op(a, '-', expr((-bi).toString()));
      }
      if (sign === '-' && a.s === '0') {
        return expr('-' + operand(b, '*', false), 3);
      }
      var precedence = sign === '+' || sign === '-' ? 1 : sign === '*' || sign === '/' ? 2 : 3;
      return expr(operand(a, sign, false) + sign + operand(b, sign, true), precedence);
    }
    var add = (a,b) => op(a,'+',b), sub = (a,b) => op(a,'-',b), mul = (a,b) => op(a,'*',b), div = (a,b) => op(a,'/',b);
    var square = a => op(a,'^',expr('2'));
    var sqrt = a => expr('sqrt(' + a.s + ')', 4);
    function compact(e) {
      if (e.s.length < 60) return e;
      var name;
      do { name = 'azv' + serial++; } while (used.has(name));
      used.add(name); definitions.push({ name: name, expression: e.s }); values.set(name, e.v);
      return { s: name, v: e.v, p: 4 };
    }
    function cached(key, fn) {
      if (memo.has(key)) return memo.get(key);
      if (busy.has(key)) throw new Error('循环引用：' + key);
      busy.add(key);
      try { var result = fn(); memo.set(key, result); return result; }
      finally { busy.delete(key); }
    }
    function point(i, axis) {
      return cached('d' + i + ':' + axis, function () {
        if (!dlb[i]) throw new Error('点 d' + i + ' 不存在');
        return compact(parse(dlb[i].split('|')[axis]));
      });
    }
    function variable(i) {
      return cached('c' + i, function () {
        if (!cllb[i]) throw new Error('变量 c' + i + ' 不存在');
        var fields = cllb[i].split('|'), name = fields[0], raw = fields[1];
        // Independent parameters stay symbolic; constructed lengths are expanded.
        if (/^[+-]?(?:\d+\.?\d*|\.\d+)$/.test(raw) && /^[a-zA-Z][a-zA-Z0-9]*$/.test(name)) {
          values.set(name, Number(raw)); return expr(name);
        }
        return compact(parse(raw));
      });
    }
    function lineThrough(i, j) {
      var x1 = point(i,0), y1 = point(i,1), x2 = point(j,0), y2 = point(j,1);
      var a = compact(sub(y2,y1)), b = compact(sub(x1,x2));
      return { type:'line', a:a, b:b, c:compact(add(mul(a,x1),mul(b,y1))) };
    }
    function derivedLine(kind, h, d) {
      var line = curve(h);
      if (line.type !== 'line') throw new Error('只能对直线构造平行线/垂线');
      var a = kind === 'gw' ? line.b : line.a;
      var b = kind === 'gw' ? sub(expr('0'),line.a) : line.b;
      return { type:'line', a:a, b:b, c:compact(add(mul(a,point(d,0)),mul(b,point(d,1)))) };
    }
    function lineValue(line, x) {
      if (line.b.v === 0) throw new Error('竖直线不能表示为 y=f(x)');
      return div(sub(line.c,mul(line.a,x)),line.b);
    }
    function normal(raw) {
      return th(raw).replace(/_/g,'-').replace(/,\s*\)/g,')');
    }
    function parse(raw, x) {
      return walk(math.parse(normal(String(raw))), x);
    }
    function walk(node, x) {
      if (node.isParenthesisNode) return walk(node.content,x);
      if (node.isConstantNode) return expr(String(node.value));
      if (node.isSymbolNode) {
        if (node.name === 'x' && x) return x;
        return expr(node.name);
      }
      if (node.isOperatorNode) {
        var a = walk(node.args[0],x);
        if (node.args.length === 1) return node.op === '-' ? sub(expr('0'),a) : a;
        return compact(op(a,node.op,walk(node.args[1],x)));
      }
      if (!node.isFunctionNode) return unsupported('不支持的几何表达式');
      var name = node.fn.name, args = node.args;
      function number(i) { return walk(args[i],x).v; }
      if (name === 'gc') return variable(number(0));
      if (name === 'gd') return point(number(0),number(1));
      if (name === 'gl') return compact(sqrt(add(square(sub(point(number(0),0),point(number(1),0))),square(sub(point(number(0),1),point(number(1),1))))));
      if (name === 'gj') {
        var points = intersections(number(0),number(1));
        if (number(3) === 2) return expr(points.length);
        if (!points[number(2)]) throw new Error('指定交点不存在');
        return points[number(2)][number(3)];
      }
      if (name === 'gz') {
        var abscissa = args.length > 2 ? walk(args[2],x) : variable(number(1));
        return parse(hslb[number(0)].split('|')[0],abscissa);
      }
      if (name === 'gs' && args.length === 3) return lineValue(lineThrough(number(1),number(2)),walk(args[0],x));
      if (name === 'gw' || name === 'gg') return lineValue(derivedLine(name,number(1),number(2)),walk(args[0],x));
      if (/^(sqrt|sin|cos|tan|abs|log|exp|acos|asin|atan)$/.test(name)) {
        return compact(expr(name + '(' + args.map(n => walk(n,x).s).join(',') + ')'));
      }
      return unsupported('暂不支持精确展开 ' + name);
    }
    function curve(i) {
      return cached('h' + i, function () {
        if (!hslb[i]) throw new Error('曲线 h' + i + ' 不存在');
        var raw = th(hslb[i].split('|')[0]);
        if (raw.startsWith('r:')) {
          var p = raw.slice(2).split(';').map(v => compact(parse(v)));
          return {type:'circle',x:p[0],y:p[1],r:p[2]};
        }
        if (raw.startsWith('x:')) return {type:'line',a:expr('1'),b:expr('0'),c:compact(parse(raw.slice(2)))};
        var circle = yhsjx(raw);
        if (circle[0]) return {type:'circle',branch:raw.startsWith('0_') || raw.startsWith('0-') ? -1 : 1,x:compact(parse(circle[1])),y:compact(parse(circle[2])),r:compact(parse(circle[3]))};
        var node = math.parse(normal(raw));
        if (node.isFunctionNode && node.fn.name === 'gs' && node.args.length === 3) return lineThrough(Number(node.args[1]),Number(node.args[2]));
        if (node.isFunctionNode && /^(gw|gg)$/.test(node.fn.name)) return derivedLine(node.fn.name,Number(node.args[1]),Number(node.args[2]));
        // Linear polynomial coefficients, without numerically fitting a curve.
        function coefficients(n) {
          if (n.isParenthesisNode) return coefficients(n.content);
          if (n.isSymbolNode && n.name === 'x') return [expr('1'),expr('0')];
          if (!n.toString().match(/\bx\b/)) return [expr('0'),walk(n)];
          if (!n.isOperatorNode) return unsupported('非一次曲线');
          var a = coefficients(n.args[0]);
          if (n.args.length === 1) return a.map(v => sub(expr('0'),v));
          var b = coefficients(n.args[1]);
          if (n.op === '+' || n.op === '-') return a.map((v,k) => op(v,n.op,b[k]));
          if (n.op === '*' && (a[0].s === '0' || b[0].s === '0')) return [add(mul(a[0],b[1]),mul(a[1],b[0])),mul(a[1],b[1])];
          if (n.op === '/' && b[0].s === '0') return a.map(v => div(v,b[1]));
          return unsupported('非一次曲线');
        }
        var coeff = coefficients(node);
        return {type:'line',a:compact(sub(expr('0'),coeff[0])),b:expr('1'),c:compact(coeff[1])};
      });
    }
    function intersections(i,j) {
      return cached('intersection:' + i + ':' + j, function () {
        var A = curve(i), B = curve(j), result;
        if (A.type === 'line' && B.type === 'line') {
          var det = compact(sub(mul(A.a,B.b),mul(B.a,A.b)));
          if (det.v === 0) return [];
          result = [[div(sub(mul(A.c,B.b),mul(B.c,A.b)),det),div(sub(mul(A.a,B.c),mul(B.a,A.c)),det)]];
        } else if (A.type === 'circle' && B.type === 'circle') {
          var dx=compact(sub(B.x,A.x)),dy=compact(sub(B.y,A.y)),d2=compact(add(square(dx),square(dy)));
          if (d2.v === 0) return [];
          var t=compact(div(add(sub(square(A.r),square(B.r)),d2),mul(expr('2'),d2)));
          var h2=compact(sub(div(square(A.r),d2),square(t)));
          if (h2.v < -1e-12) return [];
          var q=compact(sqrt(h2)),px=compact(add(A.x,mul(t,dx))),py=compact(add(A.y,mul(t,dy)));
          result=[[sub(px,mul(q,dy)),add(py,mul(q,dx))],[add(px,mul(q,dy)),sub(py,mul(q,dx))]];
        } else {
          var C=A.type==='circle'?A:B, L=A.type==='line'?A:B;
          if (L.b.v === 0) {
            var xx=compact(div(L.c,L.a)), hh=compact(sqrt(sub(square(C.r),square(sub(xx,C.x)))));
            result=[[xx,add(C.y,hh)],[xx,sub(C.y,hh)]];
            if (C.branch) result = [result[C.branch === 1 ? 0 : 1]];
          } else {
            var k=compact(div(sub(expr('0'),L.a),L.b)), b=compact(div(L.c,L.b));
            var offset=compact(sub(b,C.y)), aa=compact(add(square(k),expr('1')));
            var bb=compact(mul(expr('2'),sub(mul(k,offset),C.x)));
            var cc=compact(sub(add(square(offset),square(C.x)),square(C.r)));
            var disc=compact(sub(square(bb),mul(expr('4'),mul(aa,cc))));
            if (disc.v < -1e-10) return [];
            var root=compact(sqrt(disc)), denom=compact(mul(expr('2'),aa));
            var x1=compact(div(add(sub(expr('0'),bb),root),denom)),x2=compact(div(sub(sub(expr('0'),bb),root),denom));
            result=[[x1,add(mul(k,x1),b)],[x2,add(mul(k,x2),b)]];
          }
        }
        result = result.filter((pair,index,all) => Number.isFinite(pair[0].v) && Number.isFinite(pair[1].v) && !all.slice(0,index).some(previous =>
          Math.hypot(pair[0].v-previous[0].v,pair[1].v-previous[1].v) <= 64 * Number.EPSILON * Math.max(1,Math.abs(pair[0].v),Math.abs(pair[1].v))));
        return result.map(pair => pair.map(compact));
      });
    }
    var answer = parse(input);
    if (!Number.isFinite(answer.v)) return unsupported('当前表达式需要通用符号引擎');
    // Inline small results. Large constructions retain exact shared definitions.
    var expanded = answer.s;
    for (var i=definitions.length-1;i>=0;i--) {
      var d=definitions[i];
      expanded=expanded.replace(new RegExp('\\b'+d.name+'\\b','g'),'('+d.expression+')');
      if (expanded.length > 4000) break;
    }
    var text;
    if (expanded.length <= 4000) text = expanded;
    else text = definitions.map(d => d.name+' = '+d.expression+';').join('\n')+'\n'+answer.s;
    return { text:text, expression:answer.s, definitions:definitions, value:answer.v };
  }
  window.AZGeometry = { solve: solve };
})();
