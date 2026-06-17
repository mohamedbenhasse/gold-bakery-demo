export function forceTop() {
  try {
    window.__goldLenis?.scrollTo(0, { immediate: true, force: true });
  } catch {}
  window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
}

export function goPage(target, setPage) {
  forceTop();
  window.history.pushState(null, "", `#${target}`);
  setPage(target);
  requestAnimationFrame(forceTop);
  setTimeout(forceTop, 40);
  setTimeout(forceTop, 120);
}
