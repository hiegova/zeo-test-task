module.exports = (function () {
  const body = document.body;
  const popup = document.querySelector('.popup');
  const cancel = document.querySelector('.cancel-js');
  const uninstall = document.querySelector('.uninstall-js');
  const close = document.querySelector('.close-js');
  const appName = 'Shazam';
  document.querySelector('.appname-js').textContent = appName;

  document.querySelector('.show-popup-js').addEventListener('click', function () {
    showHidePopup();
    body.addEventListener('click', popupConrol, false);
  }, false);


  function popupConrol(e) {
    if (e.target === popup || e.target === cancel || e.target === close) {
      showHidePopup();
      removeListener(body, popupConrol);
    }

    if (e.target === uninstall) {
      showHidePopup();
      removeListener(body, popupConrol);
      setTimeout(function () {
        alert('DONE');
      }, 200);
    }
  }

  function showHidePopup() {
    popup.classList.toggle('popup--opened');
  }

  function removeListener(elem, listener) {
    elem.removeEventListener('click', listener);
  }

})();
