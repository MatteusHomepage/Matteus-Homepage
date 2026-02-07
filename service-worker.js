const CACHE_NAME = 'matteus-homepage-v2';

const BASE_PATH = '/Matteus-Homepage/';

const urlsToCache = [
  BASE_PATH,
  BASE_PATH + 'index.html',
  BASE_PATH + 'style.css',
  BASE_PATH + 'index.js',
  BASE_PATH + 'background.jpg',
  BASE_PATH + 'googles.ico',
  BASE_PATH + 'icon-192.png',
  BASE_PATH + 'icon-512.png',

  // Games
  BASE_PATH + 'Games/filling.html',
  BASE_PATH + 'Games/memory.html',
  BASE_PATH + 'Games/tetris.html',
  BASE_PATH + 'Games/tetris.mp3',
  BASE_PATH + 'Games/TicTacDoom.html',
  BASE_PATH + 'Games/war.html'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  // Only handle requests inside this app
  if (!event.request.url.startsWith(self.location.origin + BASE_PATH)) {
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      )
    )
  );
});
