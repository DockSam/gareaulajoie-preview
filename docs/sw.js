// Service Worker for offline caching - Basic PWA capability
const CACHE_NAME = 'gareaulajoie-v1';

// Assets to cache immediately on install
const STATIC_ASSETS = [
  '/gareaulajoie-preview/',
  '/gareaulajoie-preview/favicon.png',
  '/gareaulajoie-preview/favicon.ico',
  '/gareaulajoie-preview/images/hero-speaker.png',
  '/gareaulajoie-preview/og/og-image.jpg'
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS);
    })
  );
  // Activate immediately
  self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      );
    })
  );
  // Take control of all clients immediately
  self.clients.claim();
});

// Fetch event - Network first, fallback to cache
self.addEventListener('fetch', (event) => {
  // Only handle GET requests
  if (event.request.method !== 'GET') return;

  // Skip cross-origin requests (e.g., analytics, fonts API)
  if (!event.request.url.startsWith(self.location.origin)) {
    // For fonts.gstatic.com, use cache-first strategy
    if (event.request.url.includes('fonts.gstatic.com')) {
      event.respondWith(
        caches.match(event.request).then((cached) => {
          if (cached) return cached;
          return fetch(event.request).then((response) => {
            const clone = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
            return response;
          });
        })
      );
    }
    return;
  }

  event.respondWith(
    // Try network first
    fetch(event.request)
      .then((response) => {
        // Cache successful responses
        if (response.ok) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, clone);
          });
        }
        return response;
      })
      .catch(() => {
        // Network failed, try cache
        return caches.match(event.request).then((cached) => {
          if (cached) return cached;
          
          // For navigation requests, return cached index
          if (event.request.mode === 'navigate') {
            return caches.match('/gareaulajoie-preview/');
          }
          
          return new Response('Offline', { status: 503 });
        });
      })
  );
});
