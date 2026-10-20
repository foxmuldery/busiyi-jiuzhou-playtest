/* 不思异：九州 PWA 壳缓存。构建时由 build-webdeploy-package.js 自动替换 CACHE_VERSION。 */
"use strict";

const CACHE_VERSION = "bsi-0b333fc7eb035f13b089";
const SHELL_CACHE = `${CACHE_VERSION}-shell`;
const RUNTIME_CACHE = `${CACHE_VERSION}-runtime`;
const SHELL = [
  "./index.html",
  "./styles.css",
  "./app.js",
  "./data.js",
  "./error-log.js",
  "./runtime-image-variants.js",
  "./generated-art-manifest.js",
  "./generated-art-status.js",
  "./stage-fx-loader.js",
  "../../../playtest-auth.js",
  "./manifest.webmanifest",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "../../02_设计资产/可用素材/字体/fonts/LXGWWenKai-Regular.woff2",
  "../../02_设计资产/可用素材/字体/fonts/NotoSansSC-wght.woff2",
  "../../02_设计资产/可用素材/A组风格锁定/MID-BG-ROAD-001_古道荒原路段长图.webp",
  "../../02_设计资产/可用素材/B组地点事件图/EVT-001_post_gate_驿门未闭.960.webp",
  "../../02_设计资产/可用素材/B组地点事件图/LOC-001_central_post_中原驿.960.webp"
];
const MAX_RUNTIME_ENTRIES = 80;

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(SHELL_CACHE)
      .then((cache) => Promise.all(SHELL.map((url) => cache.add(new URL(url, self.registration.scope).href).catch(() => null))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(
        keys.filter((key) => !key.startsWith(CACHE_VERSION)).map((key) => caches.delete(key))
      ))
      .then(() => self.clients.claim())
  );
});

function isSameOrigin(url) {
  return url.origin === self.location.origin;
}

async function trimRuntime(cacheName) {
  const cache = await caches.open(cacheName);
  const keys = await cache.keys();
  if (keys.length <= MAX_RUNTIME_ENTRIES) return;
  await Promise.all(keys.slice(0, keys.length - MAX_RUNTIME_ENTRIES).map((key) => cache.delete(key)));
}

async function networkFirst(request, cacheName, fallback) {
  const cache = await caches.open(cacheName);
  try {
    const response = await fetch(request);
    if (response && response.ok) cache.put(request, response.clone());
    return response;
  } catch (error) {
    const cached = await caches.match(request, { ignoreSearch: true });
    if (cached) return cached;
    if (fallback) return caches.match(fallback, { ignoreSearch: true });
    throw error;
  }
}

async function staleWhileRevalidate(request, cacheName) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(request, { ignoreSearch: true });
  const network = fetch(request).then((response) => {
    if (response && response.ok) {
      cache.put(request, response.clone()).then(() => trimRuntime(cacheName));
    }
    return response;
  }).catch(() => null);
  return cached || network;
}

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET") return;
  let url;
  try {
    url = new URL(request.url);
  } catch (error) {
    return;
  }
  if (!isSameOrigin(url)) return;
  const path = url.pathname;
  if (path.includes("/api/")) return;

  if (request.mode === "navigate" || /\/index\.html$/.test(path)) {
    event.respondWith(networkFirst(request, SHELL_CACHE, "./index.html"));
    return;
  }
  if (request.destination === "script" || request.destination === "style") {
    event.respondWith(networkFirst(request, RUNTIME_CACHE));
    return;
  }
  if (["image", "font"].includes(request.destination)) {
    event.respondWith(staleWhileRevalidate(request, RUNTIME_CACHE));
  }
});
