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
    /\.(?:css|html)$/,
    new workbox.strategies.StaleWhileRevalidate({
      cacheName: prefix + '-own-' + suffix,
    })
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