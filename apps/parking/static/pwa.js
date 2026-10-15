if ("serviceWorker" in navigator && window.isSecureContext) {
  window.addEventListener("load", () => {
    const basePath = location.pathname.startsWith("/parking/") ? "/parking/" : "/";
    navigator.serviceWorker.register(`${basePath}sw.js`, { scope: basePath }).catch(() => {});
  });
}
