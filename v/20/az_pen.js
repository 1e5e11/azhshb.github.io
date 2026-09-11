/* Eight pressure levels, frame-paced input and a raster cache for completed ink. */
var AZPen = (function () {
  var layer, ctx, key, saved = [], lengths = [], active = null;
  function width(p) {
    var pressure = Number(p);
    if (!Number.isFinite(pressure)) pressure = 0.5;
    return Math.max(1, Math.min(8, Math.round(pressure * 8))) * 0.75;
  }
  function render(target, stroke, from) {
    if (!stroke.length) return;
    target.save();
    target.strokeStyle = target.fillStyle = zdyset[0];
    target.lineCap = target.lineJoin = 'round';
    function xy(p) { return [+p[0] * numtopx + ydisX, ydisY - +p[1] * numtopx]; }
    if (stroke.length === 1) {
      var p = xy(stroke[0]);
      target.beginPath(); target.arc(p[0], p[1], (+stroke[0][2] || 3) / 2, 0, Math.PI * 2); target.fill();
    } else {
      var currentWidth = -1;
      for (var i = Math.max(1, from || 1); i < stroke.length; i++) {
        var w = +stroke[i][2] || 3, a = xy(stroke[i - 1]), b = xy(stroke[i]);
        if (w !== currentWidth) {
          if (currentWidth !== -1) target.stroke();
          target.beginPath(); target.lineWidth = w; target.moveTo(a[0], a[1]); currentWidth = w;
        }
        target.lineTo(b[0], b[1]);
      }
      if (currentWidth !== -1) target.stroke();
    }
    target.restore();
  }
  function paint(target) {
    if (!layer) { layer = document.createElement('canvas'); ctx = layer.getContext('2d'); }
    var nextKey = [target.canvas.width, target.canvas.height, numtopx, ydisX, ydisY, zdyset[0]].join('|');
    var valid = nextKey === key && saved.length <= drawlj.length;
    for (var i = 0; valid && i < saved.length; i++) {
      valid = saved[i] === drawlj[i] && lengths[i] === drawlj[i].length;
    }
    if (!valid) {
      layer.width = target.canvas.width; layer.height = target.canvas.height;
      saved = []; lengths = []; key = nextKey;
    }
    for (var i = saved.length; i < drawlj.length; i++) {
      render(ctx, drawlj[i]); saved.push(drawlj[i]); lengths.push(drawlj[i].length);
    }
    target.drawImage(layer, 0, 0);
    if (active) render(target, active.stroke);
  }
  function begin(event) {
    if (!event || active) return;
    var canvas = document.getElementById('divdis');
    var state = active = { stroke: [], queue: [], frame: 0, last: null };
    var pointerId = event.pointerId;
    var spacing = 1.25 * Math.max(1, Math.min(8, Number(zdyset[10]) || 1));
    function sample(e, force) {
      var x = e.clientX * suofang, y = e.clientY * suofang;
      if (state.last && Math.hypot(x - state.last[0], y - state.last[1]) < (force ? 0.01 : spacing)) return;
      var p = px_to_num(x, y);
      var w = e.type === 'pointerup' && state.stroke.length ? state.stroke[state.stroke.length - 1][2] : width(e.pressure);
      state.queue.push([+p[0].toFixed(5), +p[1].toFixed(5), w]);
      state.last = [x, y];
    }
    function flush() {
      state.frame = 0;
      var start = state.stroke.length;
      state.stroke.push.apply(state.stroke, state.queue); state.queue = [];
      render(hbck, state.stroke, Math.max(1, start));
    }
    function move(e) {
      if (e.pointerId !== pointerId) return;
      sample(e, false);
      if (state.queue.length && !state.frame) state.frame = requestAnimationFrame(flush);
    }
    function end(e) {
      if (e.pointerId !== pointerId) return;
      if (e.type === 'pointerup') sample(e, true);
      if (state.frame) cancelAnimationFrame(state.frame);
      flush();
      if (state.stroke.length) drawlj.push(state.stroke);
      active = null;
      document.removeEventListener('pointermove', move);
      document.removeEventListener('pointerup', end);
      document.removeEventListener('pointercancel', end);
      canvas.removeEventListener('lostpointercapture', end);
      if (canvas.hasPointerCapture && canvas.hasPointerCapture(pointerId)) canvas.releasePointerCapture(pointerId);
      TBxx();
    }
    sample(event, true); flush();
    document.addEventListener('pointermove', move);
    document.addEventListener('pointerup', end);
    document.addEventListener('pointercancel', end);
    canvas.addEventListener('lostpointercapture', end);
    if (canvas.setPointerCapture) canvas.setPointerCapture(pointerId);
  }
  return { begin: begin, paint: paint, width: width };
})();
