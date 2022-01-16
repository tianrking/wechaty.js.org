                        importScripts("/assets/js/workbox-v3.6.3/workbox-sw.js");
            workbox.setConfig({modulePathPrefix: "/assets/js/workbox-v3.6.3"});

            self.__precacheManifest = [{"url":"/2022/01/11/upgrade-to-wechaty-puppet-1.0/","revision":"fd5cc45c64cb1b1716ca10be8e8a873c"},{"url":"/2022/01/06/angular-tensorflow-js/","revision":"3a50dcff0a056fb5785a9fba691bc8bc"},{"url":"/2021/12/21/mid-term-wechaty-puppet-walnut-report/","revision":"8d526c6f8af8bcb6f9a1392c66afd4e4"},{"url":"/2021/12/15/inner-glance-of-padlocal/","revision":"e2906fd51d9fa7f1bf260ad02ec59dc4"},{"url":"/2021/11/30/report-for-summer-2021/","revision":"3d7981ea88bd3ebfed4d3d00f556e65a"}];
            // set names for both precache & runtime cache
workbox.core.setCacheNameDetails({
    prefix: 'Wechaty',
    suffix: 'v1',
    precache: 'precache',
    runtime: 'runtime-cache'
});

// let Service Worker take control of pages ASAP
workbox.skipWaiting();
workbox.clientsClaim();

// let Workbox handle our precache list
workbox.precaching.precacheAndRoute(self.__precacheManifest);

// use `networkFirst` strategy for `*.html`, like all my posts
workbox.routing.registerRoute(
    /\.html$/,
    workbox.strategies.networkFirst()
);

// use `cacheFirst` strategy for images
workbox.routing.registerRoute(
    /assets\/(img|icons)/,
    workbox.strategies.cacheFirst()
);

// third party files
workbox.routing.registerRoute(
    /^https?:\/\/cdn.staticfile.org/,
    workbox.strategies.staleWhileRevalidate()
);
