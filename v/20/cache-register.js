// file:// still works normally; persistent site caching requires HTTPS or localhost.
if ('serviceWorker' in navigator && window.isSecureContext && /^https?:$/.test(location.protocol)) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('./sw.js', { updateViaCache: 'none' }).catch(function (error) {
      console.warn('网页缓存未启用，继续正常加载：', error);
    });
  });
}
