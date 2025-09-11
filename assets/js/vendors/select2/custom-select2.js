(function () {
  "use strict";

  function initSelect2() {
    $('.basic-select').select2();

    $('.hidesearch').select2({
      minimumResultsForSearch: -1
    });
  }

  // Initialize on document ready
  $(initSelect2);
})();