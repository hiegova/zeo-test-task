module.exports = (function () {
  document.querySelector('.show-popup-js').addEventListener('click', function () {
    showHidePopup();
    document.body.addEventListener('click', popupConrol, false);
  }, false);

  function popupConrol(e) {
    const isTarget = e.target.classList.contains('popup') ||
      e.target.classList.contains('cancel-js') ||
      e.target.classList.contains('close-js');

    if (isTarget) {
      showHidePopup();
      removeListener(document.body, popupConrol);
    }

    if (e.target.classList.contains('uninstall-js')) {
      showHidePopup();
      removeListener(document.body, popupConrol);
      setTimeout(function () {
        alert('DONE');
      }, 200);
    }
  }

  function showHidePopup() {
    document.querySelector('.popup').classList.toggle('popup--opened');
  }

  function removeListener(elem, listener) {
    elem.removeEventListener('click', listener);
  }

})();
