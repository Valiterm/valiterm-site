document.addEventListener('click', (e) => {
  const btn = e.target.closest('[data-copy]');
  if(!btn) return;
  const sel = btn.getAttribute('data-copy');
  const el = document.querySelector(sel);
  if(!el) return;

  const val = ('value' in el) ? el.value : el.textContent;
  navigator.clipboard.writeText(val).then(() => {
    const old = btn.textContent;
    btn.textContent = 'Copied ✓';
    setTimeout(() => (btn.textContent = old), 1200);
  });
});
