importScripts('/workbox.js');
console.log('imported');
if (workbox) {
    console.log(`Yay! Workbox is loaded 🎉`);
    workbox.routing.registerRoute('/*/**', workbox.strategies.cahceFirst({
        cacheName: 'assets',
        plugins: [
            new workbox.plugins.expiration.Plugin({
                maxEntries:10,
                maxAgeSeconds:20
            })
        ]
    }));
} else {
    console.log(`Boo! Workbox didn't load 😬`);
}
