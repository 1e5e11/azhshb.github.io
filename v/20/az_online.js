/* Opt-in transport for the existing board server protocol. Calculations stay local. */
(function () {
  'use strict';
  var localBus = window.ws, socket = null, timer = null;
  function element(id) { return document.getElementById(id); }
  function connected() { return !!socket && socket.readyState === WebSocket.OPEN; }
  function status(message) {
    var label = element('online-status');
    if (label) label.textContent = message;
    var online = connected();
    document.querySelectorAll('[data-online-action]').forEach(function (button) { button.disabled = !online; });
    if (element('online-connect')) element('online-connect').disabled = !!socket;
    if (element('online-disconnect')) element('online-disconnect').disabled = !socket;
    if (element('online-server')) element('online-server').disabled = !!socket;
  }
  function reset(message) {
    clearTimeout(timer); timer = null;
    var previous = socket; socket = null;
    window.ws = localBus;
    hsxz = false;
    var room = element('fsltdk');
    if (room) room.value = '';
    if (previous) {
      previous.onopen = previous.onmessage = previous.onerror = previous.onclose = null;
      if (previous.readyState < WebSocket.CLOSING) previous.close();
    }
    status(message);
  }
  function connect() {
    if (socket) return;
    var address = element('online-server').value.trim(), url;
    try {
      if (!address) throw new Error('请先输入服务器地址');
      url = new URL(address);
      if (!/^wss?:$/.test(url.protocol)) throw new Error('服务器地址须以 ws:// 或 wss:// 开头');
      if (url.hash || url.username || url.password) throw new Error('服务器地址不能包含账号、密码或锚点');
      if (location.protocol === 'https:' && url.protocol !== 'wss:') throw new Error('HTTPS 页面请使用 wss:// 服务器');
      socket = new WebSocket(url.href);
    } catch (error) { status(error.message); return; }
    var current = socket;
    status('正在连接服务器…');
    timer = setTimeout(function () {
      if (socket === current && !connected()) reset('连接超时，请检查服务器地址后重试');
    }, 15000);
    current.onopen = function () {
      if (socket !== current) return;
      clearTimeout(timer); timer = null;
      window.ws = current;
      hsxz = false;
      if (element('fsltdk')) element('fsltdk').value = '';
      status('已连接，可创建或加入联机');
    };
    current.onmessage = function (event) {
      if (socket !== current || typeof event.data !== 'string') return;
      try { shoudaostr(event.data); }
      catch (error) { status('服务器消息处理失败：' + error.message); }
    };
    current.onerror = function () {
      if (socket === current) reset('连接失败，请检查服务器地址和服务状态');
    };
    current.onclose = function () {
      if (socket === current) reset('服务器连接已断开，已返回本地模式');
    };
  }
  function requireConnection() {
    if (connected()) return true;
    status(socket ? '连接尚未完成，请稍候' : '请先输入服务器地址并开启联机');
    return false;
  }
  window.AZOnline = {
    connect: connect,
    connected: connected,
    requireConnection: requireConnection,
    disconnect: function () { reset('联机已关闭，已返回本地模式'); },
    routes: function (message) {
      var head = String(message).slice(0,2);
      if (head === 'jx') return false;
      return !!socket || ['xj','jo','fb','fx','ml','dd'].indexOf(head) !== -1;
    },
    sync: function () {
      if (!requireConnection()) return;
      if (!hsxz) { status('请先创建或加入联机，再同步信息'); return; }
      TB();
    },
    openPanel: function () {
      element('more').style.display = 'none';
      element('LT').style.display = 'block';
      if (!socket) status('本地模式，输入服务器地址后可手动开启联机');
    }
  };
})();
