(() => {
  const config = window.BSI_PLAYTEST_AUTH || {};
  const okKey = "BSI_JIUZHOU_AUTH";
  const gateTitle = "《不思异：九州》试玩";
  const targetUrl = config.redirect || "";

  function isAuthed() {
    try {
      return sessionStorage.getItem(okKey) === "ok";
    } catch {
      return false;
    }
  }

  function setAuthed() {
    try {
      sessionStorage.setItem(okKey, "ok");
    } catch {}
  }

  async function sha256(value) {
    if (!window.crypto || !window.crypto.subtle) return "";
    const bytes = new TextEncoder().encode(value);
    const digest = await window.crypto.subtle.digest("SHA-256", bytes);
    return Array.from(new Uint8Array(digest)).map((byte) => byte.toString(16).padStart(2, "0")).join("");
  }

  function renderGate() {
    document.documentElement.classList.remove("bsi-auth-pending");
    document.body.innerHTML = [
      '<main class="bsi-auth-gate">',
      '<section class="bsi-auth-card">',
      '<p class="bsi-auth-brand">Web Demo Playtest</p>',
      '<h1>' + gateTitle + '</h1>',
      '<p>请输入试玩密码。通过后，本浏览器本次会话会保持可玩状态。</p>',
      '<form id="bsiAuthForm">',
      '<input id="bsiAuthInput" type="password" autocomplete="current-password" placeholder="试玩密码" aria-label="试玩密码" />',
      '<button type="submit">进入试玩</button>',
      '</form>',
      '<p id="bsiAuthHint" class="bsi-auth-hint">仅供小范围内部试玩，请勿公开扩散。</p>',
      '</section>',
      '</main>'
    ].join("");

    const style = document.createElement("style");
    style.textContent = [
      "body{margin:0;min-height:100vh;background:#080704;color:#f5ecd2;font-family:system-ui,-apple-system,BlinkMacSystemFont,'Noto Sans SC',sans-serif;}",
      ".bsi-auth-gate{min-height:100vh;display:grid;place-items:center;padding:24px;background:radial-gradient(circle at 50% 20%,rgba(162,123,49,.22),transparent 38%),#080704;}",
      ".bsi-auth-card{width:min(420px,92vw);border:1px solid rgba(199,156,73,.55);background:rgba(18,13,8,.92);padding:28px;box-shadow:0 24px 80px rgba(0,0,0,.45);}",
      ".bsi-auth-brand{margin:0 0 8px;color:#c99a42;font-size:12px;letter-spacing:.12em;text-transform:uppercase;}",
      "h1{margin:0 0 12px;font-size:28px;font-weight:800;}",
      "p{line-height:1.7;color:#d7cab0;}",
      "form{display:grid;grid-template-columns:1fr auto;gap:10px;margin-top:20px;}",
      "input,button{height:44px;border-radius:6px;border:1px solid rgba(199,156,73,.5);font:inherit;}",
      "input{background:#0d0b08;color:#f5ecd2;padding:0 12px;}",
      "button{background:#b9852e;color:#160f07;font-weight:800;padding:0 16px;cursor:pointer;}",
      ".bsi-auth-hint{min-height:24px;font-size:13px;color:#a99a80;}"
    ].join("");
    document.head.appendChild(style);

    const input = document.querySelector("#bsiAuthInput");
    const hint = document.querySelector("#bsiAuthHint");
    document.querySelector("#bsiAuthForm")?.addEventListener("submit", async (event) => {
      event.preventDefault();
      const value = input?.value || "";
      const hash = await sha256(value);
      if (hash && hash === config.hash) {
        setAuthed();
        hint.textContent = "密码正确，正在进入试玩。";
        if (targetUrl) {
          window.location.href = targetUrl;
        } else {
          window.location.reload();
        }
      } else {
        hint.textContent = "密码不对，请再试一次。";
        input?.select();
      }
    });
    input?.focus();
  }

  function boot() {
    if (isAuthed()) {
      document.documentElement.classList.remove("bsi-auth-pending");
      if (targetUrl) window.location.replace(targetUrl);
      return;
    }
    renderGate();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();