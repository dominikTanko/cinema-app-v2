self.addEventListener('install', evt => {
    console.log("service worker has been installed!");
});

self.addEventListener('activate', evt => {
    console.log("service worker has been activated!");
});

self.addEventListener('fetch', evt => {
    console.log("ressource has been fetched " + evt.request.url);
});