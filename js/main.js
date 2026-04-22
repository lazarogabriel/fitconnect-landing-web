function wrapChecks() {
  document.querySelectorAll('.feat-list li').forEach(function (li) {
    var text = li.textContent;
    if (text.charAt(0) === '\u2713') {
      li.innerHTML =
        '<span class="feat-check" aria-hidden="true">\u2713</span>' +
        text.slice(1);
    }
  });
}

document.addEventListener('DOMContentLoaded', function () {
  var theme = window.Repp.theme;
  var i18n  = window.Repp.i18n;
  var modal = window.Repp.modal;

  theme.apply(theme.getInitial());
  i18n.apply(i18n.getInitial());
  wrapChecks();

  var themeBtn = document.getElementById('themeToggle');
  if (themeBtn) themeBtn.addEventListener('click', function () {
    var current = document.documentElement.getAttribute('data-theme');
    theme.apply(current === 'dark' ? 'light' : 'dark');
  });

  var langBtn = document.getElementById('langToggle');
  if (langBtn) langBtn.addEventListener('click', function () {
    var current = localStorage.getItem('repp.lang') || 'es';
    i18n.apply(current === 'es' ? 'en' : 'es');
    wrapChecks();
  });

  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  document.querySelectorAll('.store-trigger').forEach(function (btn) {
    btn.addEventListener('click', modal.open);
  });

  var closeBtn = document.getElementById('modalClose');
  if (closeBtn) closeBtn.addEventListener('click', modal.close);

  var overlay = document.getElementById('modal-soon');
  if (overlay) overlay.addEventListener('click', function (e) {
    if (e.target === overlay) modal.close();
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') modal.close();
  });
});
