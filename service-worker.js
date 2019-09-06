importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

if (workbox) {
  // If you need to manually set the mode between debug and prod, just set debug to true or false.
  // It should choose debug when working on localhost.
  // workbox.setConfig({
  //   debug: true
  // });

  const prefix = 'ncs2';
  const suffix = 'cache-v1';
  workbox.core.setCacheNameDetails({
    prefix: prefix,
    suffix: suffix
  });

  // We'll display that "offline" page if the user is offline and navigates to a page that's not cached yet.
  const offlinePage = '/offline.html';
  self.addEventListener('install', (event) => {
    const urls = [offlinePage];
    const cacheName = prefix + '-own-' + suffix;
    event.waitUntil(caches.open(cacheName).then((cache) => cache.addAll(urls)))
  });

  // Cache external js and css with stale while revalidating strategy.
  workbox.routing.registerRoute(
    new RegExp('('
      + 'https://code\\.jquery\\.com/.*\\.js' + '|'
      + 'https://cdnjs\\.cloudflare\\.com/ajax/libs/popper\\.js/1\\.14\\.7/umd/popper\\.min\\.js' + '|'
      + 'https://stackpath\\.bootstrapcdn\\.com/bootstrap/4\\.3\\.1/js/bootstrap\\.min\\.js' + '|'
      + 'https://stackpath\\.bootstrapcdn\\.com/bootstrap/4\\.3\\.1/css/bootstrap\\.min\\.css'
      + ')'),
      new workbox.strategies.StaleWhileRevalidate({
        cacheName: prefix + '-ext-' + suffix,
      })
    );

  // Cache our own HTML and CSS with stale while revalidating strategy.
  workbox.routing.registerRoute(
    /\.css/,
    new workbox.strategies.StaleWhileRevalidate({
      cacheName: prefix + '-css-' + suffix,
    })
  );

  // NOTE: the following doesn't match the root '/' of the website. So in the links we used '/index.html'.
  workbox.routing.registerRoute(
    /\.html$/,
    async ({event}) => {
      try {
        return await workbox.strategies.staleWhileRevalidate({
            cacheName:  prefix + '-html-' + suffix
        }).handle({event});
      } catch (error) {
        return caches.match(offlinePage);
      }
    }
  );

  // Cache images, with cache first strategy.
  workbox.routing.registerRoute(
    /\.(?:ico|png|jpg|jpeg|svg|gif)$/,
    new workbox.strategies.CacheFirst({
      cacheName: prefix + '-image-' + suffix,
      plugins: [
        new workbox.expiration.Plugin({
          maxEntries: 50,
          maxAgeSeconds: 7 * 24 * 60 * 60,
        })
      ],
    })
  );
}