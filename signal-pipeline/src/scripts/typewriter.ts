export function initTypewriter(
  el: HTMLElement,
  phrases: string[],
  options?: { typingMs?: number; deletingMs?: number; holdMs?: number },
) {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion || phrases.length === 0) {
    el.textContent = phrases[0] ?? '';
    return;
  }

  const typingMs = options?.typingMs ?? 95;
  const deletingMs = options?.deletingMs ?? 55;
  const holdMs = options?.holdMs ?? 1800;

  let phraseIndex = 0;
  let charIndex = 0;
  let deleting = false;

  el.textContent = '';

  const tick = () => {
    const current = phrases[phraseIndex];

    if (!deleting) {
      charIndex += 1;
      el.textContent = current.slice(0, charIndex);
      if (charIndex === current.length) {
        window.setTimeout(() => {
          deleting = true;
          tick();
        }, holdMs);
        return;
      }
      window.setTimeout(tick, typingMs);
      return;
    }

    charIndex -= 1;
    el.textContent = current.slice(0, Math.max(charIndex, 0));
    if (charIndex <= 0) {
      deleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      window.setTimeout(tick, 350);
      return;
    }
    window.setTimeout(tick, deletingMs);
  };

  window.setTimeout(tick, 400);
}
