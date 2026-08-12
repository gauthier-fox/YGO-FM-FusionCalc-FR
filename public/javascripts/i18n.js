(function () {
  var lang = (window.langueActive && typeof window.langueActive === 'string') ? window.langueActive : (navigator.language || navigator.userLanguage || 'en').toLowerCase().startsWith('fr') ? 'fr' : 'en';
  var script = document.createElement('script');
  script.src = 'public/javascripts/locale_' + lang + '.js';
  script.onload = function () {
    var t = window.locale || {};
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (!key) return;
      var text = t[key];
      if (text === undefined) return;
      var tag = el.tagName.toLowerCase();
      if (tag === 'input' || tag === 'textarea') {
        el.placeholder = text;
      } else {
        el.textContent = text;
      }
    });
  };
  document.head.appendChild(script);
})();
