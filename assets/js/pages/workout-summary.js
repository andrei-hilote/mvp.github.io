(function () {
  "use strict";

  const weekContainer = document.getElementById('weekContainer');

  if (weekContainer) {
    const dayNames = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
    const today = new Date();
    const currentDay = today.getDay(); // 0 = Sunday

    // Find Sunday
    const weekStart = new Date(today);
    weekStart.setDate(today.getDate() - currentDay);

    for (let i = 0; i < 7; i++) {
      const date = new Date(weekStart);
      date.setDate(weekStart.getDate() + i);
      const dayLabel = dayNames[i];
      const dayNumber = date.getDate();

      const dayDiv = document.createElement('div');
      dayDiv.classList.add('summary-day');
      dayDiv.setAttribute('role', 'button');
      dayDiv.setAttribute('tabindex', '0');

      dayDiv.innerHTML = `
        <div class="summaryday-label">${dayLabel}</div>
        <div class="summary-circle">✔</div>
        <div class="summary-date">${dayNumber}</div>
      `;

      dayDiv.addEventListener('click', () => {
        dayDiv.classList.toggle('active');
      });

      dayDiv.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          dayDiv.classList.toggle('active');
          e.preventDefault();
        }
      });

      weekContainer.appendChild(dayDiv);
    }
  }

  // Safe Init Heart Chart
  const heartRateEl = document.querySelector("#heartrate-chart");

  if (heartRateEl && typeof ApexCharts !== 'undefined') {
    const options = {
      chart: {
        type: 'bar',
        height: 200,
        stacked: false,
        parentHeightOffset: 0,
        parentWidthOffset: 0,
        toolbar: { show: false }
      },
      series: [
        {
          name: 'Faded',
          data: [60, 140, 100, 120, 130],
          color: 'rgba(255, 195, 0, 0.3)' // Or CodexFitNexus.themewarning + '4D'
        },
        {
          name: 'Actual',
          data: [40, 130, 90, 110, 120],
          color: CodexFitNexus.themewarning // Use theme color if applicable
        }
      ],
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '40%',
          endingShape: 'flat',
          grouped: false
        }
      },
      dataLabels: { enabled: false },
      legend: { show: false },
      grid: {
        show: true,
        borderColor: '#eee',
        strokeDashArray: 3,
        xaxis: { lines: { show: false } },
        yaxis: { lines: { show: true } }
      },
      xaxis: {
        categories: ['00:00', '14:41', '29:11', '44:08', '58:56'],
        axisBorder: { show: false },
        axisTicks: { show: false }
      },
      yaxis: {
        min: 50,
        max: 180,
        tickAmount: 4,
        labels: {
          style: { fontSize: '14px' }
        }
      }
    };

    const chart = new ApexCharts(heartRateEl, options);
    chart.render();
  }
})();