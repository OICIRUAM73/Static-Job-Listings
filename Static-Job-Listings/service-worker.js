!function(){"use strict";const e=1603772434798,s="cache"+e,t=["/client/client.bb48fe91.js","/client/inject_styles.5607aec6.js","/client/index.9b8477c0.js","/client/about.22f8f8a3.js"].concat(["/service-worker-index.html","/data.json","/global.css","/images/account.svg","/images/bg-header-desktop.svg","/images/bg-header-mobile.svg","/images/eyecam-co.svg","/images/faceit.svg","/images/favicon-32x32.png","/images/icon-remove.svg","/images/insure.svg","/images/loop-studios.svg","/images/manage.svg","/images/myhome.svg","/images/photosnap.svg","/images/shortly.svg","/images/the-air-filter-company.svg"]),a=new Set(t);self.addEventListener("install",(e=>{e.waitUntil(caches.open(s).then((e=>e.addAll(t))).then((()=>{self.skipWaiting()})))})),self.addEventListener("activate",(e=>{e.waitUntil(caches.keys().then((async e=>{for(const t of e)t!==s&&await caches.delete(t);self.clients.claim()})))})),self.addEventListener("fetch",(s=>{if("GET"!==s.request.method||s.request.headers.has("range"))return;const t=new URL(s.request.url),n=t.protocol.startsWith("http"),c=t.hostname===self.location.hostname&&t.port!==self.location.port,i=t.host===self.location.host&&a.has(t.pathname),o="only-if-cached"===s.request.cache&&!i;!n||c||o||s.respondWith((async()=>i&&await caches.match(s.request)||async function(s){const t=await caches.open("offline"+e);try{const e=await fetch(s);return t.put(s,e.clone()),e}catch(e){const a=await t.match(s);if(a)return a;throw e}}(s.request))())}))}();
