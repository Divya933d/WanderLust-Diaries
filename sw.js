const CACHE_NAME = "wanderlust-cache-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/normalize.css",
  "/assets/himalayas.jpg",
  "/assets/himalayas.webp",
  "/assets/pexels-miki-czetti-26377-111963.jpg",
  "/assets/pexels-miki-czetti-26377-111963.webp",
  "/assets/pexels-pixabay-237272.jpg",
  "/assets/pexels-pixabay-237272.webp",
  "/assets/pexels-souvenirpixels-1531660.jpg",
  "/assets/pexels-souvenirpixels-1531660.webp",
  "/icons/icon1.jpg",
  "/manifest.json",
  "/main.js"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
