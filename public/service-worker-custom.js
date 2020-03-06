const CACHE_VERSION = 13;
const CACHE_NAMES = {
  default: `spotifynder-cache-v${CACHE_VERSION}`,
};

self.addEventListener('install', function(event) {
  event.waitUntil((async () => {
    try {
      const cache = await caches.open(CACHE_NAMES.default);
      const assets = await fetch('asset-manifest.json').then(res => res.json());
      
      const files = [
        ...Object.values(assets.files),
        ...Object.values(assets.entrypoints),
      ];

      event.waitUntil((async () => {
        return files
          .filter(async (file) => await cache.match(file))
          .map(async (file) => cache.add(file));
      })());
    } catch (err) {
      console.log('Error while searching for assets!', err);
    }
  })());
});

self.addEventListener('activate', function(event) {
  event.waitUntil((async () => {
    const NAMES = Object.values(CACHE_NAMES);
    const cacheNames = await caches.keys();
    const deletePromises = cacheNames
      .filter(cacheName => NAMES.includes(cacheName))
      .map((cacheName) => caches.delete(cacheName))

    await Promise.all(deletePromises)
  })());
});

self.addEventListener('fetch', (event) => {
  if (
    event.request.method !== 'GET' ||
    !(/https?/.test(event.request.url))
  ) {
    return;
  };

  event.respondWith((async () => {
    const cache = await caches.open(CACHE_NAMES.default);
    const cacheResponse = await cache.match(event.request);

    if (cacheResponse) {
      return cacheResponse;
    }

    try {
      const response = await fetch(event.request);
      cache.put(event.request, response.clone())
      return response;
    } catch (error) {
      return error;
    }
  })());
});