var CACHE_NAME = 'cache-v64';
var urlsToCache = [
    '/logo192.png',
    '/logo512.png',
    '/manifest.json',
    '/favicon.ico',
    '/static/css/main.530345e5.css',
    '/static/js/main.330a2566.js',
    '/',
];

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function (cache) {
                return cache.addAll(urlsToCache);
            })
    );
});

this.addEventListener('fetch', event => {
    //console.log('fetch')
    if (event.request.mode === 'navigate' && event.request.url.includes("/usuario/") || event.request.url.includes("/busca/")) {
        return event.respondWith(caches.match('/'));

    }
    event.respondWith(
        caches.open(CACHE_NAME).then(function (cache) {
            //console.log('cache aberto')
            return caches.match(event.request).then(function (response) {
                return response || fetch(event.request);
            })
        })
    );
});