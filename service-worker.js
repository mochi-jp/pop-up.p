// service-worker.js
self.addEventListener("install", function(e) {
  e.waitUntil(
    caches.open("mochi-calculator").then(function(cache) {
      return cache.addAll([
       "/pop-up.p/",
       "/pop-up.p/index.html",
       "/pop-up.p/manifest.json",
       "/pop-up.p/service-worker.js",
       "/pop-up.p/icon-192.png",
       "/pop-up.p/icon-512.png"
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
