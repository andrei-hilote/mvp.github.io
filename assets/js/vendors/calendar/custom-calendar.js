(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {
    var modal = new bootstrap.Modal(document.getElementById("e-modal"), { keyboard: false });
    var eventsList = document.getElementById("codex-events-list");
    var form = document.getElementById("form-event");
    var currentEvent = null;
    var validations = document.getElementsByClassName("needs-validation");

    new FullCalendar.Draggable(eventsList, {
      itemSelector: ".fc-event",
      eventData: function (el) {
        return {
          title: el.innerText.trim(),
          className: el.className.replace("fc-event", "").trim(),
          imageSrc: el.querySelector("img") ? el.querySelector("img").src : null,
        };
      },
    });

    var calendarEl = document.getElementById("codex-calendar");
    var calendar = new FullCalendar.Calendar(calendarEl, {
      codexEvntFilter: {
        left: "prev,next today",
        center: "title",
        right: "dayGridMonth,timeGridWeek,timeGridDay,listYear",
      },
      initialDate: '2025-06-12',
      initialView: 'timeGridWeek',
      navLinks: true,
      editable: true,
      droppable: true,
      selectable: true,
      selectMirror: true,
      nowIndicator: true,
      dayMaxEvents: true,
      drop: function (info) {
        if (document.getElementById("drop-remove").checked) {
          info.draggedEl.parentNode.removeChild(info.draggedEl);
        }
      },
      select: function (info) {
        currentEvent = null;
        $("#e-title").val("");
        $("#event-category").val("");
        $("#startdate").val(info.start);
        $("#allDay").val(info.allDay);
        $("#btn-delete-event").hide();
        $("#e-modal").modal("show");
        $("#modal-title").html("Add Event");
        calendar.unselect();
      },
      eventClick: function (info) {
        document.getElementById("e-title").value = "";
        currentEvent = info.event;
        document.getElementById("e-title").value = currentEvent.title;
        $("#event-category").val(currentEvent.classNames[0] || "");
        $("#modal-title").html("Edit Event");
        $("#btn-delete-event").show();
        $("#e-modal").modal("show");
      },
      eventClassNames: function (arg) {
        return arg.event.classNames.length ? arg.event.classNames : [];
      },
      eventContent: function (arg) {
        const { event } = arg;
        const timeText = event.allDay
          ? "All Day"
          : event.start
            ? event.start.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            : "";
        const imgSrc = event.extendedProps.imageSrc;

        const html = `
          <div>
            ${imgSrc ? `<img src="${imgSrc}" style="width: 24px; height: 24px; object-fit: contain;margin-bottom:10px;" />` : ""}
            <h5 style="font-weight: 600; font-size: 0.9rem; color: #222;margin-bottom:2px;">${event.title}</h5>
            <span style="color: #666; font-size: 0.75rem;">${timeText}</span>
          </div>
        `;
        return { html };
      },
      events: [
        {
          title: "All Day Event",
          start: "2025-06-01",
          className: "bg-light-primary",
          imageSrc: "../assets/images/shedule/cardioworkouts.png",
        },
        {
          title: "Long Event",
          start: "2025-07-07",
          end: "2025-07-10",
          className: "bg-light-secondary",
          imageSrc: "../assets/images/shedule/strengthtraining.png",
        },
        {
          groupId: 999,
          title: "Meeting",
          start: "2025-06-09T16:00:00",
          className: "bg-light-success",
          imageSrc: "../assets/images/shedule/flexibility.png",
        },
      ],
    });

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      var startDate = $("#startdate").val();
      var allDayVal = $("#allDay").val();
      var title = document.getElementById("e-title").value;
      var category = $("#event-category").val();
      var imageSrc = null;

      var categoryEl = event.target.querySelector(`#event-category option[value="${category}"]`);
      if (categoryEl) {
        imageSrc = categoryEl.dataset.imgSrc || null;
      }

      var eventLi = document.querySelector(`#codex-events-list li.${category}`);
      if (eventLi && eventLi.querySelector("img")) {
        imageSrc = eventLi.querySelector("img").src;
      }

      if (!validations[0].checkValidity()) {
        validations[0].classList.add("was-validated");
      } else {
        if (currentEvent) {
          currentEvent.setProp("title", title);
          currentEvent.setProp("classNames", [category]);
          currentEvent.setExtendedProp("imageSrc", imageSrc);
        } else {
          var newEvent = {
            title: title,
            start: new Date(startDate),
            allDay: allDayVal === "true" || allDayVal === true,
            className: category,
            imageSrc: imageSrc,
          };
          calendar.addEvent(newEvent);
        }
        modal.hide();
      }
    });

    $("#btn-delete-event").on("click", function () {
      if (currentEvent) {
        currentEvent.remove();
        modal.hide();
      }
    });

    calendar.render();

    var headerToolbar = calendarEl.querySelector(".fc-header-toolbar");
    if (headerToolbar && eventsList) {
      headerToolbar.parentNode.insertBefore(eventsList, headerToolbar.nextSibling);
    }
  });

  $(function () {
    $("#smallcalendar").datepicker({
      format: "yyyy",
      viewMode: "years",
      minViewMode: "years",
      autoclose: true
    }).datepicker('show');

    $('.trainer-slider').slick({
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      speed: 300,
      responsive: [
        { breakpoint: 1441, settings: { slidesToShow: 3 } },
        { breakpoint: 768, settings: { slidesToShow: 2 } },
        { breakpoint: 481, settings: { slidesToShow: 1 } }
      ]
    });
  });

})();