// 轻量错误记录器：把最近的 JS 异常/未处理 Promise 存进内存与 localStorage，
// 供反馈包附带。它不联网、不改变游戏状态，自身异常全部吞掉。
(function () {
  "use strict";
  if (typeof window === "undefined") return;
  var KEY = "bsi-error-log-v1";
  var MAX = 20;
  var entries = [];
  try {
    var saved = JSON.parse(localStorage.getItem(KEY) || "[]");
    if (Array.isArray(saved)) entries = saved.slice(-MAX);
  } catch (error) {}

  function persist() {
    try {
      localStorage.setItem(KEY, JSON.stringify(entries.slice(-MAX)));
    } catch (error) {}
  }

  function record(kind, message, stack, source, line) {
    try {
      entries.push({
        at: new Date().toISOString(),
        kind: kind,
        message: String(message || "").slice(0, 500),
        stack: String(stack || "").slice(0, 1200),
        source: String(source || "").slice(0, 300),
        line: Number(line) || 0
      });
      if (entries.length > MAX) entries = entries.slice(-MAX);
      persist();
    } catch (error) {}
  }

  window.addEventListener("error", function (event) {
    record("error", event.message, event.error && event.error.stack, event.filename, event.lineno);
  });
  window.addEventListener("unhandledrejection", function (event) {
    var reason = event.reason;
    record(
      "rejection",
      reason && reason.message ? reason.message : reason,
      reason && reason.stack,
      "",
      0
    );
  });

  window.BSI_ERROR_LOG = {
    list: function () {
      return entries.slice();
    },
    text: function (limit) {
      var count = Number(limit) > 0 ? Number(limit) : 5;
      var recent = entries.slice(-count);
      if (!recent.length) return "无";
      return recent.map(function (entry) {
        return [
          "[" + entry.at + "] " + entry.kind + ": " + entry.message,
          entry.source ? "  at " + entry.source + (entry.line ? ":" + entry.line : "") : "",
          entry.stack ? "  " + entry.stack.split("\n").slice(0, 3).join("\n  ") : ""
        ].filter(Boolean).join("\n");
      }).join("\n");
    },
    clear: function () {
      entries = [];
      persist();
    }
  };
})();
