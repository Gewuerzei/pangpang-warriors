const CACHE = 'pangpang-warriors-v1.1.0';
const ASSETS = ['./', './index.html', './manifest.webmanifest', './icons/pangpang.svg'];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys
    .filter(key => key.startsWith('pangpang-warriors-') && key !== CACHE)
    .map(key => caches.delete(key)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', event => {
  const request = event.request;
  if(request.method !== 'GET' || new URL(request.url).origin !== self.location.origin) return;
  // Network-first for page navigation so installed iPhones receive menu updates when online.
  if(request.mode === 'navigate'){
    event.respondWith(fetch(request).then(response => {
      if(response.ok){
        const copy = response.clone();
        caches.open(CACHE).then(cache => cache.put('./index.html', copy)).catch(()=>{});
      }
      return response;
    }).catch(() => caches.match(request).then(cached => cached || caches.match('./index.html'))));
    return;
  }
  event.respondWith(caches.match(request).then(cached => cached || fetch(request).then(response => {
    if(response.ok){
      const copy = response.clone();
      caches.open(CACHE).then(cache => cache.put(request, copy)).catch(()=>{});
    }
    return response;
  })));
});