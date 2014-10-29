
'use strict';

navigator.mozL10n.once(function onL10nReady() {
  function onPanelReady(evt) {
    window.removeEventListener('panelready', onPanelReady);
    if (evt.detail.current !== '#findmydevice') {
      return;
    }
    require(['findmydevice'], function(FindMyDevice) {});
  }
  window.addEventListener('panelready', onPanelReady);
});
