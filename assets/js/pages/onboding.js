(function () {
  "use strict";

  // Initialize Date Picker for Birth Year
  $(function () {
    $("#selectdateofbirth").datepicker({
      format: "yyyy",
      viewMode: "years",
      minViewMode: "years",
      autoclose: true
    });
  });

  // Multi-Step Form Logic
  document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("multiStepForm");
    if (!form) return;

    const steps = form.querySelectorAll(".form-step");
    let currentStep = 0;

    function goToStep(step) {
      if (step >= 0 && step < steps.length) {
        steps[currentStep].classList.remove("active");
        steps[step].classList.add("active");
        currentStep = step;
      }
    }

    form.querySelectorAll(".btn.btn-primary").forEach((btn) => {
      btn.addEventListener("click", () => {
        goToStep(currentStep + 1);
      });
    });

    form.querySelectorAll(".step-preve").forEach((btn) => {
      btn.addEventListener("click", () => {
        goToStep(currentStep - 1);
      });
    });

    form.querySelectorAll(".step-skip").forEach((btn) => {
      btn.addEventListener("click", () => {
        goToStep(currentStep + 1);
      });
    });
  });

  // Convert HEX to RGBA
  function hexToRgba(hex, alpha) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }

  // Profile Chart Initialization
  const profileChartEl = document.querySelector("#profile-chart");
  if (profileChartEl && typeof ApexCharts !== "undefined") {
    const options = {
      chart: {
        type: 'radialBar',
        height: 300
      },
      series: [75],
      plotOptions: {
        radialBar: {
          hollow: { size: '60%' },
          track: {
            background: hexToRgba(CodexFitNexus.themeprimary, 0.2)
          },
          dataLabels: {
            name: { show: false },
            value: {
              fontSize: '35px',
              fontWeight: '600',
              show: true,
              formatter: val => val + '%'
            }
          }
        }
      },
      colors: [CodexFitNexus.themeprimary],
      labels: ['Progress']
    };

    const chart = new ApexCharts(profileChartEl, options);
    chart.render();
  }

})();
