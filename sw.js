/* Service Worker: Offline-Modus fuer Modul 320 */
const CACHE = 'm320-v2';
const LOCAL = ["./", "index.html", "css/styles.css", "js/app.js", "js/quiz.js", "manifest.webmanifest", "icons/icon.svg", "icons/icon-192.png", "icons/icon-512.png", "Anforderungen/x_gitres/auction.png", "Anforderungen/x_gitres/figur_hierarchie.png", "aufgaben/m1.html", "aufgaben/d1.html", "aufgaben/v1.html", "aufgaben/m2.html", "aufgaben/d2.html", "aufgaben/v2.html", "aufgaben/m3.html", "aufgaben/d3.html", "aufgaben/v3.html", "aufgaben/q3.html", "aufgaben/m4.html"];
const REMOTE = ['https://cdnjs.cloudflare.com/ajax/libs/mermaid/10.9.1/mermaid.min.js'];

self.addEventListener('install', (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE);
    await cache.addAll(LOCAL);
    await Promise.all(REMOTE.map((u) => cache.add(u).catch(() => {})));
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin === self.location.origin) {
    // Eigene Dateien: erst Netz (aktuell), sonst Cache
    event.respondWith((async () => {
      const cache = await caches.open(CACHE);
      try {
        const res = await fetch(req);
        if (res && res.ok) cache.put(req, res.clone());
        return res;
      } catch (e) {
        const hit = await cache.match(req, { ignoreSearch: true });
        if (hit) return hit;
        if (req.mode === 'navigate') return (await cache.match('index.html')) || Response.error();
        return Response.error();
      }
    })());
  } else {
    // Fremde Ressourcen (Mermaid, Schrift): erst Cache, sonst Netz und merken
    event.respondWith((async () => {
      const cache = await caches.open(CACHE);
      const hit = await cache.match(req);
      if (hit) return hit;
      try {
        const res = await fetch(req);
        if (res && (res.ok || res.type === 'opaque')) cache.put(req, res.clone());
        return res;
      } catch (e) {
        return Response.error();
      }
    })());
  }
});
