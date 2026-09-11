/* az_simplify.js
 * 本地精确表达式化简模块（取自 simplifier (1).html 的核心算法）
 * 功能：分式有理数运算(Frac)、递归下降解析、AST 化简、多项式整理
 * 对外接口：
 *   AZSimplify.simplify(expr)        -> 字符串（失败返回 null）
 *   AZSimplify.simplifyStrict(expr)  -> 字符串（失败抛出异常）
 *   AZSimplify.Frac                  -> 精确分数类（供系统求解器复用）
 */
'use strict';
/* ===================== Fraction (exact rational, BigInt) ===================== */
/* 精确有理数运算使用 BigInt，避免 103^34243 这类大整数溢出为 Infinity。 */

function toBigInt(v) {
  if (typeof v === 'bigint') return v;
  if (typeof v === 'number') {
    if (!Number.isInteger(v)) throw new Error('整数分式中出现了小数');
    return BigInt(v);
  }
  if (typeof v === 'string') {
    if (!/^[+-]?[0-9]+$/.test(v)) throw new Error('无法转换为整数: ' + v);
    return BigInt(v);
  }
  throw new Error('无法转换为整数');
}

function bigintAbs(v) { return v < 0n ? -v : v; }

function bigintGcd(a, b) {
  a = bigintAbs(a); b = bigintAbs(b);
  while (b) { const t = a % b; a = b; b = t; }
  return a;
}

function bigintPow(base, exp) {
  base = toBigInt(base);
  exp = toBigInt(exp);
  if (exp < 0n) throw new Error('bigintPow 不支持负指数');
  let r = 1n;
  while (exp > 0n) {
    if (exp & 1n) r *= base;
    base *= base;
    exp >>= 1n;
  }
  return r;
}

function safeBigIntToNumber(v) {
  const n = Number(v);
  if (!Number.isFinite(n)) throw new Error('指数过大，无法处理');
  return n;
}

class Frac {
  constructor(n, d = 1) {
    n = toBigInt(n);
    d = toBigInt(d);
    if (d === 0n) throw new Error('除以零错误');
    if (d < 0n) { n = -n; d = -d; }
    const g = bigintGcd(n, d);
    this.n = n === 0n ? 0n : n / g;
    this.d = n === 0n ? 1n : d / g;
  }
  add(o) { return new Frac(this.n * o.d + o.n * this.d, this.d * o.d); }
  sub(o) { return new Frac(this.n * o.d - o.n * this.d, this.d * o.d); }
  mul(o) { return new Frac(this.n * o.n, this.d * o.d); }
  div(o) {
    if (o.n === 0n) throw new Error('除以零错误');
    return new Frac(this.n * o.d, this.d * o.n);
  }
  neg() { return new Frac(-this.n, this.d); }
  isZero() { return this.n === 0n; }
  isOne() { return this.n === 1n && this.d === 1n; }
  isNegative() { return this.n < 0n; }
  isInteger() { return this.d === 1n; }
  pow(intExp) {
    intExp = toBigInt(intExp);
    if (intExp >= 0n) return new Frac(bigintPow(this.n, intExp), bigintPow(this.d, intExp));
    if (this.n === 0n) throw new Error('除以零错误');
    return new Frac(bigintPow(this.d, -intExp), bigintPow(this.n, -intExp));
  }
  toString() { return this.d === 1n ? this.n.toString() : this.n.toString() + '/' + this.d.toString(); }
}

function integerNthRoot(x, k) {
  x = toBigInt(x);
  k = toBigInt(k);
  if (x < 0n || k <= 0n) return null;
  if (x === 0n || x === 1n) return x;
  if (k === 1n) return x;
  const bits = BigInt(x.toString(2).length);
  let root = 1n;
  if (bits > 1n) root = 1n << ((bits - 1n) / k + 1n);
  while (true) {
    let power = bigintPow(root, k - 1n);
    const next = ((k - 1n) * root + x / power) / k;
    if (next >= root) break;
    root = next;
  }
  const p = bigintPow(root, k);
  if (p === x) return root;
  if (bigintPow(root + 1n, k) === x) return root + 1n;
  return null;
}

function tryExactRoot(baseFrac, expFrac) {
  const p = expFrac.n, q = expFrac.d;
  const isNegExp = p < 0n;
  const absP = bigintAbs(p);
  let raised;
  try { raised = baseFrac.pow(absP); } catch (e) { return null; }
  const rootN = integerNthRoot(bigintAbs(raised.n), q);
  const rootD = integerNthRoot(raised.d, q);
  if (rootN === null || rootD === null) return null;
  let result = new Frac(rootN, rootD);
  if (raised.n < 0n) {
    if ((q % 2n) === 1n) result = result.neg();
    else return null; // even root of negative number: not real
  }
  if (isNegExp) result = new Frac(1).div(result);
  return result;
}
/* ===================== Tokenizer ===================== */

function tokenize(input) {
  const tokens = [];
  const s = input.replace(/\s+/g, '');
  let i = 0;
  while (i < s.length) {
    const c = s[i];
    if (/[0-9]/.test(c) || (c === '.' && /[0-9]/.test(s[i + 1] || ''))) {
      let j = i, seenDot = false;
      while (j < s.length && (/[0-9]/.test(s[j]) || (s[j] === '.' && !seenDot))) {
        if (s[j] === '.') seenDot = true;
        j++;
      }
      tokens.push({ type: 'num', value: s.slice(i, j) });
      i = j;
    } else if (/[a-zA-Z]/.test(c)) {
      if (s.startsWith('sqrt(', i)) {
        tokens.push({ type: 'sqrt', value: 'sqrt' });
        i += 4;
      } else if (s.startsWith('cbrt(', i)) {
        tokens.push({ type: 'cbrt', value: 'cbrt' });
        i += 4;
      } else {
        let j = i + 1;
        while (j < s.length && /[0-9]/.test(s[j])) j++;
        tokens.push({ type: 'var', value: s.slice(i, j) });
        i = j;
      }
    } else if ('+-*/^()'.includes(c)) {
      tokens.push({ type: c, value: c });
      i++;
    } else {
      throw new Error(`无法识别的字符: "${c}"`);
    }
  }
  return tokens;
}

/* ===================== Parser (recursive descent) ===================== */

function parseNumToFrac(str) {
  if (!str.includes('.')) return new Frac(str, 1);
  const [intPart, fracPart] = str.split('.');
  const denom = bigintPow(10, BigInt(fracPart.length));
  const numerStr = (intPart === '' ? '0' : intPart) + fracPart;
  return new Frac(numerStr, denom);
}

function negateAst(node) {
  return { type: 'mul', factors: [{ type: 'num', value: new Frac(-1) }, node] };
}

function startsFactor(tok) {
  if (!tok) return false;
  return tok.type === 'num' || tok.type === 'var' || tok.type === '(' || tok.type === 'sqrt' || tok.type === 'cbrt';
}

function parse(tokens) {
  let pos = 0;
  const peek = () => tokens[pos];
  const next = () => tokens[pos++];
  const atEnd = () => pos >= tokens.length;

  function parseExpr() {
    let node = parseTerm();
    while (!atEnd() && (peek().type === '+' || peek().type === '-')) {
      const op = next().type;
      const rhs = parseTerm();
      node = { type: 'add', terms: [node, op === '-' ? negateAst(rhs) : rhs] };
    }
    return node;
  }

  function parseTerm() {
    let node = parseSignedFactor();
    while (!atEnd()) {
      const tok = peek();
      if (tok.type === '*') {
        next();
        node = { type: 'mul', factors: [node, parseSignedFactor()] };
      } else if (tok.type === '/') {
        next();
        const rhs = parseSignedFactor();
        node = { type: 'mul', factors: [node, { type: 'pow', base: rhs, exp: { type: 'num', value: new Frac(-1) } }] };
      } else if (startsFactor(tok)) {
        node = { type: 'mul', factors: [node, parseSignedFactor()] };
      } else break;
    }
    return node;
  }

  function parseSignedFactor() {
    if (!atEnd() && (peek().type === '-' || peek().type === '+')) {
      const op = next().type;
      const node = parseSignedFactor();
      return op === '-' ? negateAst(node) : node;
    }
    return parsePower();
  }

  function parsePower() {
    const base = parsePrimary();
    if (!atEnd() && peek().type === '^') {
      next();
      const exp = parseSignedFactor(); // right-associative
      return { type: 'pow', base, exp };
    }
    return base;
  }

  function parsePrimary() {
    const tok = peek();
    if (!tok) throw new Error('表达式意外结束（缺少内容）');
    if (tok.type === 'num') { next(); return { type: 'num', value: parseNumToFrac(tok.value) }; }
    if (tok.type === 'var') { next(); return { type: 'var', name: tok.value }; }
    if (tok.type === 'sqrt' || tok.type === 'cbrt') {
      next();
      if (atEnd() || peek().type !== '(') throw new Error(`${tok.value} 后面需要紧跟括号，如 ${tok.value}(x)`);
      next();
      const inner = parseExpr();
      if (atEnd() || peek().type !== ')') throw new Error('缺少右括号 ")"');
      next();
      const rootExp = tok.type === 'sqrt' ? new Frac(1, 2) : new Frac(1, 3);
      return { type: 'pow', base: inner, exp: { type: 'num', value: rootExp } };
    }
    if (tok.type === '(') {
      next();
      const node = parseExpr();
      if (atEnd() || peek().type !== ')') throw new Error('缺少右括号 ")"');
      next();
      return node;
    }
    throw new Error(`无法解析的符号: "${tok.value}"`);
  }

  const result = parseExpr();
  if (!atEnd()) throw new Error(`表达式末尾有多余内容: "${tokens.slice(pos).map(t => t.value).join('')}"`);
  return result;
}

/* ===================== Canonical key (for grouping) ===================== */

function canonicalKey(node) {
  switch (node.type) {
    case 'num': return `#${node.value.n}/${node.value.d}`;
    case 'var': return `v:${node.name}`;
    case 'add': return `(+ ${node.terms.map(canonicalKey).sort().join(' ')})`;
    case 'mul': return `(* ${node.factors.map(canonicalKey).sort().join(' ')})`;
    case 'pow': return `(^ ${canonicalKey(node.base)} ${canonicalKey(node.exp)})`;
    default: throw new Error('未知节点类型');
  }
}

/* ===================== Simplifier ===================== */

const MAX_EXPAND_EXPONENT = 12;
const SAFETY_TERM_CAP = 500;

function simplify(node) {
  switch (node.type) {
    case 'num': return node;
    case 'var': return node;
    case 'pow': return simplifyPow(simplify(node.base), simplify(node.exp));
    case 'mul': return simplifyMul(node.factors.map(simplify));
    case 'add': return simplifyAdd(node.terms.map(simplify));
    default: throw new Error('未知节点类型');
  }
}

function splitCoeff(node) {
  if (node.type === 'num') return { coef: node.value, monomial: null };
  if (node.type === 'mul') {
    let coef = new Frac(1);
    const rest = [];
    for (const f of node.factors) {
      if (f.type === 'num') coef = coef.mul(f.value);
      else rest.push(f);
    }
    if (rest.length === 0) return { coef, monomial: null };
    if (rest.length === 1) return { coef, monomial: rest[0] };
    return { coef, monomial: { type: 'mul', factors: rest } };
  }
  return { coef: new Frac(1), monomial: node };
}

function degreeOf(node) {
  switch (node.type) {
    case 'num': return 0;
    case 'var': return 1;
    case 'pow': {
      const b = degreeOf(node.base);
      const e = node.exp.type === 'num' ? (safeBigIntToNumber(node.exp.value.n) / safeBigIntToNumber(node.exp.value.d)) : 1;
      return b * e;
    }
    case 'mul': return node.factors.reduce((s, f) => s + degreeOf(f), 0);
    case 'add': return Math.max(...node.terms.map(degreeOf));
    default: return 1;
  }
}

function varExponents(node) {
  const map = new Map();
  (function walk(n) {
    if (n.type === 'var') map.set(n.name, (map.get(n.name) || 0) + 1);
    else if (n.type === 'pow' && n.base.type === 'var' && n.exp.type === 'num') {
      const e = safeBigIntToNumber(n.exp.value.n) / safeBigIntToNumber(n.exp.value.d);
      map.set(n.base.name, (map.get(n.base.name) || 0) + e);
    } else if (n.type === 'mul') {
      for (const f of n.factors) walk(f);
    }
  })(node);
  return map;
}

function compareTermsForDisplay(a, b) {
  const da = degreeOf(a), db = degreeOf(b);
  if (da !== db) return db - da; // higher total degree first

  // Same degree: graded lexicographic order on alphabetical variables,
  // e.g. x^2 before x*y before y^2, matching standard textbook expansion order.
  const ma = splitCoeff(a).monomial, mb = splitCoeff(b).monomial;
  const expA = ma ? varExponents(ma) : new Map();
  const expB = mb ? varExponents(mb) : new Map();
  const allVars = new Set([...expA.keys(), ...expB.keys()]);
  for (const v of [...allVars].sort()) {
    const ea = expA.get(v) || 0, eb = expB.get(v) || 0;
    if (ea !== eb) return eb - ea;
  }
  const ka = canonicalKey(a), kb = canonicalKey(b);
  return ka < kb ? -1 : ka > kb ? 1 : 0;
}

function simplifyAdd(terms) {
  const flat = [];
  (function flatten(list) {
    for (const t of list) { if (t.type === 'add') flatten(t.terms); else flat.push(t); }
  })(terms);

  const groups = new Map();
  const order = [];
  for (const t of flat) {
    const { coef, monomial } = splitCoeff(t);
    if (coef.isZero()) continue;
    const key = monomial ? canonicalKey(monomial) : '#const';
    if (groups.has(key)) {
      groups.get(key).coef = groups.get(key).coef.add(coef);
    } else {
      groups.set(key, { coef, monomial });
      order.push(key);
    }
  }

  let resultTerms = [];
  for (const key of order) {
    const g = groups.get(key);
    if (g.coef.isZero()) continue;
    if (g.monomial === null) {
      resultTerms.push({ type: 'num', value: g.coef });
    } else if (g.coef.isOne()) {
      resultTerms.push(g.monomial);
    } else {
      const factors = g.monomial.type === 'mul' ? g.monomial.factors : [g.monomial];
      resultTerms.push({ type: 'mul', factors: [{ type: 'num', value: g.coef }, ...factors] });
    }
  }

  resultTerms.sort(compareTermsForDisplay);

  if (resultTerms.length === 0) return { type: 'num', value: new Frac(0) };
  if (resultTerms.length === 1) return resultTerms[0];
  return { type: 'add', terms: resultTerms };
}

function multiplyTermLists(termsA, termsB) {
  if (termsA.length * termsB.length > SAFETY_TERM_CAP) return null;
  const products = [];
  for (const a of termsA) for (const b of termsB) products.push(simplifyMul([a, b]));
  return products;
}

function expandIntPow(sumNode, n) {
  if (n === 0) return { type: 'num', value: new Frac(1) };
  let resultTerms = sumNode.terms.slice();
  for (let power = 1; power < n; power++) {
    const products = multiplyTermLists(resultTerms, sumNode.terms);
    if (products === null) return null;
    const combined = simplifyAdd(products);
    resultTerms = combined.type === 'add' ? combined.terms : [combined];
    if (resultTerms.length > SAFETY_TERM_CAP) return null;
  }
  return resultTerms.length === 1 ? resultTerms[0] : { type: 'add', terms: resultTerms };
}

function simplifyPow(base, exp) {
  if (exp.type === 'num' && exp.value.isZero()) return { type: 'num', value: new Frac(1) };
  if (exp.type === 'num' && exp.value.isOne()) return base;

  if (base.type === 'num') {
    if (base.value.isZero()) {
      if (exp.type === 'num' && exp.value.isNegative()) throw new Error('计算错误：0 的负数次幂无意义');
      return { type: 'num', value: new Frac(0) };
    }
    if (base.value.isOne()) return { type: 'num', value: new Frac(1) };
    if (exp.type === 'num') {
      if (exp.value.isInteger()) return { type: 'num', value: base.value.pow(exp.value.n) };
      const rooted = tryExactRoot(base.value, exp.value);
      if (rooted !== null) return { type: 'num', value: rooted };
    }
    return { type: 'pow', base, exp };
  }

  if (base.type === 'pow') {
    // (a^b)^c = a^(b*c) -- valid for any exponents, numeric or symbolic; this is
    // what lets sqrt(x^2) collapse to x.
    const newExp = simplifyMul([base.exp, exp]);
    return simplifyPow(base.base, newExp);
  }

  if (exp.type === 'num' && exp.value.isInteger()) {
    const n = exp.value.n;
    if (base.type === 'mul') {
      const newFactors = base.factors.map(f => simplifyPow(f, exp));
      return simplifyMul(newFactors);
    }
    if (base.type === 'add') {
      if (n >= 0 && n <= MAX_EXPAND_EXPONENT) {
        const expanded = expandIntPow(base, n);
        if (expanded !== null) return expanded;
      } else if (n < 0 && n >= -MAX_EXPAND_EXPONENT) {
        const expandedPos = expandIntPow(base, -n);
        if (expandedPos !== null) {
          if (expandedPos.type === 'num') return { type: 'num', value: new Frac(1).div(expandedPos.value) };
          return { type: 'pow', base: expandedPos, exp: { type: 'num', value: new Frac(-1) } };
        }
      }
      return { type: 'pow', base, exp };
    }
    return { type: 'pow', base, exp };
  }

  return { type: 'pow', base, exp };
}

function simplifyMul(factors) {
  const flat = [];
  (function flatten(list) {
    for (const f of list) { if (f.type === 'mul') flatten(f.factors); else flat.push(f); }
  })(factors);

  let coef = new Frac(1);
  const others = [];
  for (const f of flat) {
    if (f.type === 'num') coef = coef.mul(f.value);
    else others.push(f);
  }
  if (coef.isZero()) return { type: 'num', value: new Frac(0) };

  const baseGroups = new Map();
  const baseOrder = [];
  for (const f of others) {
    let base, exp;
    if (f.type === 'pow') { base = f.base; exp = f.exp; }
    else { base = f; exp = { type: 'num', value: new Frac(1) }; }
    const key = canonicalKey(base);
    if (baseGroups.has(key)) baseGroups.get(key).exps.push(exp);
    else { baseGroups.set(key, { base, exps: [exp] }); baseOrder.push(key); }
  }

  let resultFactors = [];
  function absorb(n) {
    if (n.type === 'num') coef = coef.mul(n.value);
    else if (n.type === 'mul') { for (const f of n.factors) absorb(f); }
    else resultFactors.push(n);
  }

  for (const key of baseOrder) {
    const g = baseGroups.get(key);
    const combinedExp = g.exps.length === 1 ? g.exps[0] : simplifyAdd(g.exps);
    const powResult = simplifyPow(g.base, combinedExp);
    absorb(powResult);
    if (coef.isZero()) return { type: 'num', value: new Frac(0) };
  }

  // Combine numeric roots sharing the same fractional exponent, e.g. sqrt(2)*sqrt(8)
  // -> sqrt(16) -> 4, even though neither sqrt(2) nor sqrt(8) reduces alone.
  const rootGroups = new Map();
  const keepFactors = [];
  for (const f of resultFactors) {
    if (f.type === 'pow' && f.base.type === 'num' && f.exp.type === 'num' && !f.exp.value.isInteger()) {
      const ekey = canonicalKey(f.exp);
      if (!rootGroups.has(ekey)) rootGroups.set(ekey, { exp: f.exp, baseProduct: new Frac(1), count: 0 });
      const g = rootGroups.get(ekey);
      g.baseProduct = g.baseProduct.mul(f.base.value);
      g.count++;
    } else keepFactors.push(f);
  }
  if (rootGroups.size > 0) {
    resultFactors = keepFactors;
    for (const g of rootGroups.values()) {
      absorb(g.count === 1
        ? { type: 'pow', base: { type: 'num', value: g.baseProduct }, exp: g.exp }
        : simplifyPow({ type: 'num', value: g.baseProduct }, g.exp));
    }
    if (coef.isZero()) return { type: 'num', value: new Frac(0) };
  }

  // Don't distribute a sum into a denominator factor (e.g. (x+2)*(x+1)^(-1) should
  // stay "(x + 2)/(x + 1)", not split into "x/(x+1) + 2/(x+1)"). Only distribute when
  // every factor here is "numerator-side".
  const hasDenominatorFactor = resultFactors.some(f => f.type === 'pow' && f.exp.type === 'num' && f.exp.value.isNegative());
  const addIdx = hasDenominatorFactor ? -1 : resultFactors.findIndex(f => f.type === 'add');
  if (addIdx !== -1) {
    const sumNode = resultFactors[addIdx];
    const restFactors = resultFactors.filter((_, i) => i !== addIdx);
    const distributed = sumNode.terms.map(term => simplifyMul([{ type: 'num', value: coef }, ...restFactors, term]));
    return simplifyAdd(distributed);
  }

  function factorSortKey(node) {
    if (node.type === 'var') return node.name;
    if (node.type === 'pow' && node.base.type === 'var') return node.base.name;
    return canonicalKey(node);
  }
  resultFactors.sort((a, b) => {
    const ka = factorSortKey(a), kb = factorSortKey(b);
    return ka < kb ? -1 : ka > kb ? 1 : 0;
  });

  if (resultFactors.length === 0) return { type: 'num', value: coef };
  if (coef.isOne()) return resultFactors.length === 1 ? resultFactors[0] : { type: 'mul', factors: resultFactors };
  return { type: 'mul', factors: [{ type: 'num', value: coef }, ...resultFactors] };
}

/* ===================== Stringifier ===================== */

function toDisplayFraction(mulNode) {
  const factors = mulNode.type === 'mul' ? mulNode.factors : [mulNode];
  let coef = new Frac(1);
  const numFactors = [];
  const denFactors = [];
  for (const f of factors) {
    if (f.type === 'num') coef = coef.mul(f.value);
    else if (f.type === 'pow' && f.exp.type === 'num' && f.exp.value.n < 0) {
      const posExpVal = f.exp.value.neg();
      const baseNode = posExpVal.isOne() ? f.base : { type: 'pow', base: f.base, exp: { type: 'num', value: posExpVal } };
      denFactors.push(baseNode);
    } else numFactors.push(f);
  }
  return { coef, numFactors, denFactors };
}

function wrapIfNeeded(node) {
  const s = stringifyNode(node);
  if (node.type === 'add' || node.type === 'mul') return `(${s})`;
  return s;
}

function stringifyProduct(mulNode) {
  const { coef, numFactors, denFactors } = toDisplayFraction(mulNode);
  const neg = coef.n < 0;
  const absN = coef.n < 0n ? -coef.n : coef.n;
  const d = coef.d;

  const numParts = [];
  if (absN !== 1n || numFactors.length === 0) numParts.push(`${absN}`);
  for (const f of numFactors) numParts.push(wrapIfNeeded(f));
  const numStr = numParts.join('*');

  let denStr = '';
  if (d !== 1n || denFactors.length > 0) {
    const denParts = [];
    if (d !== 1n) denParts.push(`${d}`);
    for (const f of denFactors) denParts.push(wrapIfNeeded(f));
    denStr = denParts.join('*');
  }

  if (denStr === '') return (neg ? '-' : '') + numStr;
  const denNeedsParens = (d !== 1n && denFactors.length > 0) || denFactors.length > 1;
  const finalDen = denNeedsParens ? `(${denStr})` : denStr;
  return (neg ? '-' : '') + `${numStr}/${finalDen}`;
}

function wrapPowBaseIfNeeded(base) {
  const s = stringifyNode(base);
  if (base.type === 'add' || base.type === 'mul' || base.type === 'pow') return `(${s})`;
  if (base.type === 'num' && base.value.isNegative()) return `(${s})`;
  return s;
}

function wrapPowExpIfNeeded(exp) {
  const s = stringifyNode(exp);
  if (exp.type === 'add' || exp.type === 'mul' || exp.type === 'pow') return `(${s})`;
  if (exp.type === 'num' && (exp.value.isNegative() || !exp.value.isInteger())) return `(${s})`;
  return s;
}

function stringifyPowNode(node) {
  if (node.exp.type === 'num' && node.exp.value.isNegative()) {
    const posExp = { type: 'num', value: node.exp.value.neg() };
    const baseNode = posExp.value.isOne() ? node.base : { type: 'pow', base: node.base, exp: posExp };
    const denStr = stringifyNode(baseNode);
    const denWrapped = (baseNode.type === 'add' || baseNode.type === 'mul') ? `(${denStr})` : denStr;
    return `1/${denWrapped}`;
  }
  return `${wrapPowBaseIfNeeded(node.base)}^${wrapPowExpIfNeeded(node.exp)}`;
}

function termIsNegative(node) {
  if (node.type === 'num') return node.value.isNegative();
  if (node.type === 'mul') return toDisplayFraction(node).coef.isNegative();
  return false;
}

function negateNode(node) {
  if (node.type === 'num') return { type: 'num', value: node.value.neg() };
  if (node.type === 'mul' && node.factors[0] && node.factors[0].type === 'num') {
    return { type: 'mul', factors: [{ type: 'num', value: node.factors[0].value.neg() }, ...node.factors.slice(1)] };
  }
  return node;
}

function stringifyAddNode(node) {
  let result = '';
  node.terms.forEach((term, i) => {
    const neg = termIsNegative(term);
    const s = stringifyNode(neg ? negateNode(term) : term);
    if (i === 0) result = neg ? `-${s}` : s;
    else result += neg ? ` - ${s}` : ` + ${s}`;
  });
  return result;
}

function stringifyNode(node) {
  switch (node.type) {
    case 'num': return node.value.toString();
    case 'var': return node.name;
    case 'pow': return stringifyPowNode(node);
    case 'mul': return stringifyProduct(node);
    case 'add': return stringifyAddNode(node);
    default: throw new Error('未知节点类型');
  }
}

/* ===================== Public API ===================== */

function simplifyExpression(input) {
  if (typeof input !== 'string' || input.trim() === '') throw new Error('输入不能为空');
  const tokens = tokenize(input);
  if (tokens.length === 0) throw new Error('输入不能为空');
  const ast = parse(tokens);
  const simplified = simplify(ast);
  return stringifyNode(simplified);
}

/* ===================== 对外接口 ===================== */
window.AZSimplify = {
  simplifyStrict: simplifyExpression,
  simplify: function (expr) {
    try { return simplifyExpression(String(expr)); } catch (e) { return null; }
  },
  Frac: Frac
};

