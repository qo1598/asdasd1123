const CACHE_NAME = 'memorycard-game-v1';
const urlsToCache = [
    '/asdasd1123/',
    '/asdasd1123/index.html',
    '/asdasd1123/manifest.json',
    'https://i.ibb.co/LXX4jcLB/maskable-icon-x192.png',
    'https://i.ibb.co/6J1ZXXy1/maskable-icon-x512.png'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                return response || fetch(event.request);
            })
            .catch(() => {
                return new Response('오프라인 상태입니다.');
            })
    );
});
