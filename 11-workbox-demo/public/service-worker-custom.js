importScripts('/workbox.js');
if (workbox) {
    console.log(`Yay! Workbox is loaded 🎉`);
    [
        '/',
        new RegExp("/.*\.js"),
        new RegExp('/.*\.css'),
        new RegExp('/static/js/'),
        new RegExp('/static/media/')
    ].forEach(url => {
        workbox.routing.registerRoute(url, workbox.strategies.networkFirst());
    })
} else {
    console.log(`Boo! Workbox didn't load 😬`);
}
