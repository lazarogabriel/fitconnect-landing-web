window.Repp = window.Repp || {};

window.Repp.i18n = (function () {
  var KEY = 'repp.lang';

  function getInitial() {
    var saved = localStorage.getItem(KEY);
    if (saved === 'es' || saved === 'en') return saved;
    return (navigator.language || 'es').toLowerCase().startsWith('en') ? 'en' : 'es';
  }

  function apply(lang) {
    var dicts = window.Repp.translations || {};
    var dict = dicts[lang] || dicts.es || {};
    localStorage.setItem(KEY, lang);
    document.documentElement.setAttribute('lang', lang);

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      var attr = el.getAttribute('data-i18n-attr');
      var value = dict[key];
      if (value === undefined) return;
      if (attr) el.setAttribute(attr, value);
      else el.textContent = value;
    });

    if (dict['meta.title']) document.title = dict['meta.title'];

    var label = document.getElementById('langLabel');
    if (label) label.textContent = lang === 'es' ? 'EN' : 'ES';
  }

  return { getInitial: getInitial, apply: apply };
}());
