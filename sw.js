const CACHE_NAME = 'buti-marc-v1.3';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  './icona.svg',
  './sons/remenar.mp3',
  './sons/repartir.mp3',
  './sons/tirar_carta.mp3',
  './sons/recollir_basa.mp3',
  './sons/error.mp3',
  './sons/cop_taula.mp3',
  './sons/aplaudiments.mp3',
  './sons/derrota.mp3'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});