// 舞台 WebGL 效果层的轻量加载器。
// 只在真实浏览器、支持 WebGL、未关闭动态时，于页面空闲后异步加载 vendor/stage-fx.bundle.js。
// 任何一步不满足都静默跳过：原有 CSS 舞台保持不变。`?fx=0` 可强制关闭。
(function () {
  "use strict";
  if (typeof window === "undefined" || typeof document === "undefined") return;
  var BUNDLE = "./vendor/stage-fx.bundle.js?v=20261020-3";

  function disabledByUrl() {
    try {
      return new URLSearchParams(window.location.search).get("fx") === "0";
    } catch (error) {
      return false;
    }
  }

  function webglAvailable() {
    try {
      var canvas = document.createElement("canvas");
      if (!canvas || typeof canvas.getContext !== "function") return false;
      var gl = canvas.getContext("webgl2") || canvas.getContext("webgl");
      if (!gl) return false;
      var lose = gl.getExtension && gl.getExtension("WEBGL_lose_context");
      if (lose) lose.loseContext();
      return true;
    } catch (error) {
      return false;
    }
  }

  var motionObserver = null;

  function motionEnabled() {
    return !document.body.classList.contains("disabled-motion");
  }

  function lowPowerDevice() {
    try {
      // 手机横屏宽度通常 < 1024；WebGL 场景初始化会带来约 0.5s 长任务，
      // 移动端保留 CSS 舞台更稳。
      if (window.innerWidth > 0 && window.innerWidth < 1024) return true;
      var connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
      if (connection && connection.saveData) return true;
      if (Number(navigator.deviceMemory) > 0 && Number(navigator.deviceMemory) <= 2) return true;
      if (Number(navigator.hardwareConcurrency) > 0 && Number(navigator.hardwareConcurrency) <= 2) return true;
    } catch (error) {}
    return false;
  }

  function waitForMotion(stage) {
    stage.setAttribute("data-stage-fx", "motion-off");
    if (motionObserver) return;
    motionObserver = new MutationObserver(function () {
      if (!motionEnabled()) return;
      motionObserver.disconnect();
      motionObserver = null;
      load();
    });
    motionObserver.observe(document.body, { attributes: true, attributeFilter: ["class"] });
  }

  function load() {
    var stage = document.getElementById("journeyStage");
    if (!stage || disabledByUrl() || !webglAvailable() || lowPowerDevice()) {
      if (stage) stage.setAttribute("data-stage-fx", "off");
      return;
    }
    if (!motionEnabled()) {
      waitForMotion(stage);
      return;
    }
    var script = document.createElement("script");
    script.src = BUNDLE;
    script.async = true;
    script.onload = function () {
      if (window.BSI_STAGE_FX) window.BSI_STAGE_FX.mount(stage);
    };
    script.onerror = function () {
      stage.setAttribute("data-stage-fx", "unavailable");
    };
    document.head.appendChild(script);
  }

  function schedule() {
    if (typeof window.requestIdleCallback === "function") window.requestIdleCallback(load, { timeout: 1500 });
    else window.setTimeout(load, 300);
  }

  if (document.readyState === "complete") schedule();
  else window.addEventListener("load", schedule, { once: true });
})();
