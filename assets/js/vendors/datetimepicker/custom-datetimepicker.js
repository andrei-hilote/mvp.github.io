(function () {
  "use strict";

  //** datetimepicker **//
  $('#datetimepicker').datetimepicker();
  //** TimePicker **//

  $('#timePicker').datetimepicker({
    datepicker:false,
    format:'H:i'
  });

})();