#!/usr/bin/env node
"use strict";

// Minimal same-origin feedback receiver for internal playtests.
//
//   node feedback-server.js            # http://127.0.0.1:4188/
//   PORT=8080 node feedback-server.js
//
// It serves the prototype directory and accepts POST /api/feedback with a
// JSON body, writing one file per submission into feedback-inbox/. This is
// deliberately dependency-free and not a production service: put it behind
// the same auth/reverse proxy as the playtest build, and keep the inbox out
// of git.

const http = require("http");
const fs = require("fs");
const path = require("path");

const ROOT = __dirname;
const ASSET_ROOT = path.resolve(__dirname, "../../02_设计资产");
const INBOX = process.env.BSI_FEEDBACK_INBOX || path.join(ROOT, "feedback-inbox");
const DEPLOY_ROOT = path.resolve(__dirname, "../../..");
const STATIC_ROOTS = [
  { prefix: "/GitHub资产区/03_WebDemo/prototype/", dir: ROOT },
  { prefix: "/GitHub资产区/02_设计资产/", dir: ASSET_ROOT },
  { prefix: "/GitHub资产区/06_音乐音效/", dir: path.resolve(__dirname, "../../06_音乐音效") },
  { prefix: "/GitHub资产区/07_视频动态/", dir: path.resolve(__dirname, "../../07_视频动态") },
  { prefix: "/play/", dir: path.join(DEPLOY_ROOT, "play") }
];
// Files the deploy wrapper references from its root; absent in the source
// checkout, in which case they simply 404.
const EXACT_FILES = new Map([
  ["/build-info.js", path.join(DEPLOY_ROOT, "build-info.js")],
  ["/build-info.json", path.join(DEPLOY_ROOT, "build-info.json")],
  ["/playtest-auth.js", path.join(DEPLOY_ROOT, "playtest-auth.js")]
]);
const INDEX_PATH = "/GitHub资产区/03_WebDemo/prototype/index.html";
const PORT = process.env.PORT !== undefined ? Number(process.env.PORT) : 4188;
const HOST = process.env.HOST || "127.0.0.1";
const MAX_BODY = 128 * 1024;
const TOKEN = process.env.BSI_FEEDBACK_TOKEN || "";

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".webp": "image/webp",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".woff2": "font/woff2",
  ".woff": "font/woff",
  ".mp3": "audio/mpeg",
  ".mp4": "video/mp4",
  ".txt": "text/plain; charset=utf-8",
  ".md": "text/markdown; charset=utf-8"
};

function sendJson(res, status, value) {
  const body = JSON.stringify(value);
  res.writeHead(status, {
    "Content-Type": "application/json; charset=utf-8",
    "Content-Length": Buffer.byteLength(body),
    "Cache-Control": "no-store"
  });
  res.end(body);
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    let size = 0;
    const chunks = [];
    req.on("data", (chunk) => {
      size += chunk.length;
      if (size > MAX_BODY) {
        reject(new Error("body too large"));
        req.destroy();
        return;
      }
      chunks.push(chunk);
    });
    req.on("end", () => resolve(Buffer.concat(chunks).toString("utf8")));
    req.on("error", reject);
  });
}

async function handleFeedback(req, res) {
  if (TOKEN && req.headers["x-feedback-token"] !== TOKEN) {
    sendJson(res, 401, { ok: false, error: "token required" });
    return;
  }
  let payload;
  try {
    payload = JSON.parse(await readBody(req));
  } catch (error) {
    sendJson(res, 400, { ok: false, error: error.message });
    return;
  }
  if (!payload || typeof payload.text !== "string" || payload.text.trim().length < 10) {
    sendJson(res, 400, { ok: false, error: "text is required" });
    return;
  }
  fs.mkdirSync(INBOX, { recursive: true });
  const stamp = new Date().toISOString().replace(/[:.]/g, "-");
  const id = `${stamp}-${Math.random().toString(36).slice(2, 8)}`;
  const record = {
    id,
    receivedAt: new Date().toISOString(),
    remoteAddress: req.socket.remoteAddress,
    payload
  };
  fs.writeFileSync(path.join(INBOX, `${id}.json`), JSON.stringify(record, null, 2), "utf8");
  sendJson(res, 200, { ok: true, id });
}

async function handleDeviceReport(req, res) {
  try {
    const body = await readBody(req);
    const payload = JSON.parse(body);
    if (!payload || typeof payload !== "object" || Array.isArray(payload)) {
      sendJson(res, 400, { ok: false, error: "report object required" });
      return;
    }
    const stamp = new Date().toISOString().replace(/[:.]/g, "-");
    const id = `device-${stamp}-${Math.random().toString(36).slice(2, 8)}`;
    const record = {
      id,
      receivedAt: new Date().toISOString(),
      remoteAddress: req.socket.remoteAddress,
      payload
    };
    fs.mkdirSync(INBOX, { recursive: true });
    fs.writeFileSync(path.join(INBOX, `${id}.json`), JSON.stringify(record, null, 2), "utf8");
    sendJson(res, 200, { ok: true, id });
  } catch (error) {
    sendJson(res, 400, { ok: false, error: error.message || "bad report" });
  }
}

function serveStatic(req, res) {
  const url = new URL(req.url, `http://${req.headers.host || "localhost"}`);
  let pathname;
  try {
    pathname = decodeURIComponent(url.pathname);
  } catch {
    res.writeHead(400);
    res.end("bad path");
    return;
  }
  if (pathname === "/" || pathname === "") {
    res.writeHead(302, { Location: encodeURI(INDEX_PATH) });
    res.end();
    return;
  }
  if (pathname === "/feedback") {
    res.writeHead(302, { Location: encodeURI("/GitHub资产区/03_WebDemo/prototype/P0反馈填写页.html") });
    res.end();
    return;
  }
  let target = EXACT_FILES.get(pathname);
  if (!target) {
    const mount = STATIC_ROOTS.find((entry) => pathname.startsWith(entry.prefix));
    if (!mount) {
      res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      res.end("not found");
      return;
    }
    const relative = pathname.slice(mount.prefix.length);
    target = path.resolve(mount.dir, relative);
    if (target !== mount.dir && !target.startsWith(mount.dir + path.sep)) {
      res.writeHead(403);
      res.end("forbidden");
      return;
    }
  }
  fs.stat(target, (error, stat) => {
    if (error || !stat.isFile()) {
      res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      res.end("not found");
      return;
    }
    const type = MIME[path.extname(target).toLowerCase()] || "application/octet-stream";
    res.writeHead(200, {
      "Content-Type": type,
      "Content-Length": stat.size,
      "Cache-Control": "no-store"
    });
    fs.createReadStream(target).pipe(res);
  });
}

const server = http.createServer(async (req, res) => {
  if (req.method === "POST" && req.url === "/api/feedback") {
    await handleFeedback(req, res);
    return;
  }
  if (req.method === "GET" && req.url === "/api/feedback/list") {
    let items = [];
    try {
      items = fs.readdirSync(INBOX)
        .filter((name) => name.endsWith(".json"))
        .map((name) => JSON.parse(fs.readFileSync(path.join(INBOX, name), "utf8")))
        .sort((left, right) => String(right.receivedAt).localeCompare(String(left.receivedAt)))
        .slice(0, 100)
        .map((record) => ({
          id: record.id,
          receivedAt: record.receivedAt,
          fields: record.payload?.fields || {},
          text: record.payload?.text || ""
        }));
    } catch {}
    sendJson(res, 200, { ok: true, count: items.length, items });
    return;
  }
  if (req.method === "POST" && req.url === "/api/device-report") {
    await handleDeviceReport(req, res);
    return;
  }
  if (req.method === "GET" && req.url === "/api/device-report/health") {
    sendJson(res, 200, { ok: true });
    return;
  }
  if (req.method === "GET" && req.url === "/api/feedback/health") {
    let count = 0;
    try {
      count = fs.readdirSync(INBOX).filter((name) => name.endsWith(".json")).length;
    } catch {}
    sendJson(res, 200, { ok: true, count });
    return;
  }
  if (req.method !== "GET" && req.method !== "HEAD") {
    sendJson(res, 405, { ok: false, error: "method not allowed" });
    return;
  }
  serveStatic(req, res);
});

server.listen(PORT, HOST, () => {
  const actual = server.address().port;
  console.log(`feedback server: http://${HOST}:${actual}${INDEX_PATH}`);
  console.log(`inbox: ${INBOX}`);
});
