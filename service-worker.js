
self.addEventListener('fetch', event => {
  console.log(`SW: Fetching ${event.request.url}`);
});
