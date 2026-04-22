window.Repp = window.Repp || {};

window.Repp.modal = (function () {
  var ID = 'modal-soon';

  function open() {
    var m = document.getElementById(ID);
    m.classList.add('open');
    m.setAttribute('aria-hidden', 'false');
  }

  function close() {
    var m = document.getElementById(ID);
    m.classList.remove('open');
    m.setAttribute('aria-hidden', 'true');
  }

  return { open: open, close: close };
}());
