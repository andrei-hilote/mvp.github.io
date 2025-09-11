(function () {
  "use strict";

  function showNotify(type, message = "Example notify") {
    $.notify({
      title: '',
      message: message,
      icon: '',
      url: '',
      target: '_blank'
    }, {
      element: 'body',
      type: type,
      showProgressbar: false,
      placement: {
        from: "top",
        align: "right"
      },
      offset: 20,
      spacing: 10,
      z_index: 1031,
      delay: 3300,
      timer: 1000,
      url_target: '_blank',
      mouse_over: null,
      animate: {
        enter: 'animated fadeInDown',
        exit: 'animated fadeOutRight'
      },
      onShow: null,
      onShown: null,
      onClose: null,
      onClosed: null,
      icon_type: 'class'
    });
  }

  // Notify functions
  window.primarynotify = function () { showNotify("primary"); };
  window.secondarynotify = function () { showNotify("secondary"); };
  window.successnotify = function () { showNotify("success"); };
  window.infonotify = function () { showNotify("info"); };
  window.warningnotify = function () { showNotify("warning"); };
  window.dangernotify = function () { showNotify("danger"); };

})();