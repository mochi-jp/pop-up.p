// service-worker.js
self.addEventListener("install", function(e) {
  e.waitUntil(
    caches.open("mochi-calculator").then(function(cache) {
      return cache.addAll([
        "/pop-up/",
        "/pop-up/index.html",
        "/pop-up/manifest.json",
        "/pop-up/service-worker.js",
        "/pop-up/icon-192.png",
        "/pop-up/icon-512.png"
        // 他にCSSやJSファイルがあるならここに追加
      ]);
    })
  );
});

self.addEventListener("fetch", function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
