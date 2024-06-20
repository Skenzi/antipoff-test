const CACHE = 'cache-only-v1';
const timeout = 600;

function fromCache(request) {
    return caches.open(CACHE).then((cache) =>
      cache.match(request)
          .then((matching) => matching || Promise.reject('no-match'))
    );
}

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE).then((cache) => cache.addAll(['/img/background']))
    )
});

self.addEventListener('fetch', (event) => {
    event.respondWith(fromCache(event.request))
});