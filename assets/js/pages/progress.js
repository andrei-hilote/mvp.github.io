(function () {
  "use strict";

  // Utility: Initialize Apex Chart safely
  function initChart(selector, options) {
    const el = document.querySelector(selector);
    if (el && typeof ApexCharts !== 'undefined') {
      const chart = new ApexCharts(el, options);
      chart.render();
    }
  }

  // Heartbeat Chart
  initChart("#heartbeat-chart", {
    chart: {
      type: 'line',
      height: 20,
      sparkline: { enabled: true }
    },
    series: [{
      name: 'Heartbeat',
      data: [1, 3, 1, 2, 1, 5, 1, 2, 1, 4, 1, 2, 1, 3, 1, 2, 1]
    }],
    stroke: {
      curve: 'straight',
      width: 2,
      colors: [CodexFitNexus.themedanger]
    },
    fill: {
      type: 'solid',
      opacity: 1,
      colors: ['#ef476f']
    },
    grid: { show: false },
    tooltip: { enabled: false }
  });

  // Weight Chart
  initChart("#weight-chart", {
    series: [{
      name: 'Blance Flow',
      data: [96, 85, 85, 75, 80, 70, 60]
    }],
    chart: {
      type: 'area',
      height: 320,
      toolbar: { show: false }
    },
    colors: [CodexFitNexus.themesecondary],
    stroke: {
      curve: 'straight',
      width: 2,
      colors: [CodexFitNexus.themesecondary]
    },
    dataLabels: { enabled: false },
    grid: {
      borderColor: '#edeeef',
      strokeDashArray: 2,
      padding: { top: 0, bottom: 0, right: 0 },
      xaxis: { lines: { show: true } }
    },
    yaxis: {
      labels: { show: false },
      axisTicks: { show: false },
      axisBorder: { show: false }
    },
    xaxis: {
      categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      labels: {
        style: {
          colors: '#8392a5',
          fontSize: '14px',
          fontWeight: 500,
          fontFamily: 'DM Sans , sans-serif'
        }
      },
      axisTicks: { show: false },
      axisBorder: { show: false }
    }
  });

  // Progress Chart
  initChart("#workout-goals", {
    chart: {
      type: 'radialBar',
      height: 240,
      sparkline: { enabled: true }
    },
    series: [75],
    labels: ['14/20 Completed'],
    colors: [CodexFitNexus.themeinfo],
    plotOptions: {
      radialBar: {
        hollow: { margin: 10, size: '70%' },
        track: {
          background: '#d8d5ec',
          strokeWidth: '100%',
          margin: 0
        },
        dataLabels: {
          show: true,
          name: {
            offsetY: 20,
            show: true,
            color: '#666',
            fontSize: '14px'
          },
          value: {
            formatter: val => val + '%',
            color: '#000',
            fontSize: '24px',
            show: true,
            offsetY: -10
          }
        }
      }
    },
    stroke: { lineCap: 'round' },
    states: {
      normal: { filter: { type: 'none' } },
      hover: { filter: { type: 'none' } },
      active: { filter: { type: 'none' } }
    }
  });

  // Activity Chart
  initChart("#workout-activity", {
    series: [{
      name: 'Blance Flow',
      data: [20, 40, 30, 45, 60, 40, 25]
    }],
    chart: {
      type: 'bar',
      height: 280,
      toolbar: { show: false }
    },
    colors: [CodexFitNexus.themesecondary],
    plotOptions: {
      bar: {
        columnWidth: '50%',
        distributed: true,
        borderRadius: 5,
        endingShape: 'rounded'
      }
    },
    dataLabels: { enabled: false },
    grid: {
      borderColor: '#edeeef',
      strokeDashArray: 3,
      padding: { top: 0, bottom: 0, left: 0, right: 0 },
      xaxis: { lines: { show: true } }
    },
    yaxis: {
      labels: { show: false },
      axisTicks: { show: false },
      axisBorder: { show: false }
    },
    xaxis: {
      categories: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
      labels: {
        style: {
          colors: '#8392a5',
          fontSize: '14px',
          fontWeight: 500,
          fontFamily: 'DM Sans , sans-serif'
        }
      },
      axisTicks: { show: false },
      axisBorder: { show: false }
    }
  });

  // Calories Statistic
  initChart("#calories-statistic", {
    series: [
      { name: 'Active', data: [1600, 1000, 1800, 1500, 1400, 1450, 1150] },
      { name: 'Resting', data: [1000, 500, 1000, 600, 1200, 1100, 850] }
    ],
    chart: {
      type: 'bar',
      height: 300,
      stacked: true,
      toolbar: { show: false }
    },
    colors: [CodexFitNexus.themeprimary, CodexFitNexus.themeprimary + '80'],
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '60%',
        borderRadius: 5,
        endingShape: 'rounded'
      }
    },
    dataLabels: { enabled: false },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    xaxis: {
      categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      axisBorder: { show: false },
      axisTicks: { show: false },
      labels: {
        style: {
          colors: '#8392a5',
          fontSize: '14px',
          fontFamily: 'DM Sans, sans-serif'
        }
      }
    },
    yaxis: {
      min: 0,
      max: 2000,
      tickAmount: 5,
      labels: {
        style: {
          colors: '#8392a5',
          fontSize: '14px',
          fontFamily: 'DM Sans, sans-serif'
        },
        formatter: val => val
      }
    },
    tooltip: {
      y: { formatter: val => val + " Cal" }
    },
    grid: {
      borderColor: '#edeeef',
      strokeDashArray: 3,
      padding: { top: 0, bottom: 0, left: 0, right: 0 },
      xaxis: { lines: { show: true } }
    },
    legend: {
      position: 'top',
      horizontalAlign: 'left',
      fontFamily: 'DM Sans, sans-serif'
    },
    fill: { opacity: 1 }
  });

})();