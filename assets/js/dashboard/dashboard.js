(function () {
  "use strict";

  // Utility: Initialize Gauge Chart
  function initGaugeChart(id, value, max, color, suffix = '%', fontColor = '#9D9D9D') {
    const chart = echarts.init(document.getElementById(id));
    chart.setOption({
      series: [{
        type: 'gauge',
        startAngle: 90,
        endAngle: -270,
        min: 0,
        max: max,
        progress: {
          show: true,
          width: 5,
          itemStyle: { color }
        },
        axisLine: {
          lineStyle: {
            width: 5,
            color: [[1, '#f5f5f5']]
          }
        },
        pointer: { show: false },
        axisTick: { show: false },
        splitLine: { show: false },
        axisLabel: { show: false },
        anchor: { show: false },
        title: { show: false },
        detail: {
          valueAnimation: true,
          fontSize: 12,
          offsetCenter: [0, 0],
          formatter: val => val + suffix,
          color: fontColor
        },
        data: [{ value: 0 }]
      }]
    });
    setTimeout(() => {
      chart.setOption({ series: [{ data: [{ value }] }] });
    }, 500);
  }

  // Water Chart
  echarts.init(document.getElementById('water-overview')).setOption({
    series: [{
      type: 'gauge',
      startAngle: 90,
      endAngle: -270,
      min: 0,
      max: 3,
      progress: {
        show: true,
        width: 14,
        itemStyle: { color: '#fff' }
      },
      axisLine: {
        lineStyle: { width: 14, color: [[1, 'rgba(255, 255, 255, 0.2)']] }
      },
      pointer: { show: false },
      axisTick: { show: false },
      splitLine: { show: false },
      axisLabel: { show: false },
      anchor: { show: false },
      title: { show: false },
      detail: {
        valueAnimation: true,
        fontSize: 16,
        offsetCenter: [0, 0],
        formatter: value => `${value}\nLiters`,
        color: '#fff'
      },
      data: [{ value: 2.25 }]
    }]
  });

  // Calories Chart
  echarts.init(document.getElementById('calories-chart')).setOption({
    tooltip: { formatter: '{a} <br/>{b} : {c}%' },
    series: [{
      name: 'Today',
      type: 'gauge',
      startAngle: 180,
      endAngle: 0,
      min: 0,
      max: 100,
      radius: '90%',
      axisLine: {
        lineStyle: {
          width: 15,
          color: [
            [0.6, 'rgba(255, 255, 255, 1)'],
            [1, 'rgba(255, 255, 255, 0.2)']
          ]
        }
      },
      pointer: { length: '60%', width: 4, itemStyle: { color: 'black' } },
      axisTick: { show: false },
      splitLine: { show: false },
      axisLabel: { show: false },
      detail: { show: false },
      data: [{ value: 60, name: '' }]
    }],
    graphic: [
      { type: 'text', left: 'center', top: '65%', style: { text: 'Today', font: 'bold 14px sans-serif', fill: '#fff' } },
      { type: 'text', left: 'center', top: '75%', style: { text: 'Under', font: '14px sans-serif', fill: '#fff' } }
    ]
  });

  // Heart Rate Line Chart
  echarts.init(document.getElementById('heart-rate')).setOption({
    backgroundColor: '#f45b85',
    grid: { top: 10, bottom: 10, left: 10, right: 10 },
    xAxis: { type: 'category', data: ['0','1','2','3','4','5','6'], show: false },
    yAxis: { type: 'value', show: false },
    series: [{
      data: [60, 90, 50, 100, 60, 95, 80],
      type: 'line',
      lineStyle: { width: 4, color: 'rgba(255, 255, 255, 0.7)' },
      symbol: 'none'
    }],
    graphic: {
      type: 'text',
      left: 10,
      bottom: 10,
      style: { text: '110 Bpm', font: 'bold 20px sans-serif', fill: '#fff' }
    }
  });

  // Activity Chart (Bar)
  new ApexCharts(document.querySelector("#activity-chart"), {
    series: [{ name: 'Blance Flow', data: [20, 40, 30, 45, 60, 40, 25] }],
    chart: { type: 'bar', height: 270, toolbar: { show: false } },
    labels: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
    colors: [CodexFitNexus.themeprimary],
    plotOptions: { bar: { columnWidth: '30px', distributed: true, borderRadius: 5 } },
    dataLabels: { enabled: false },
    legend: { show: false },
    grid: { borderColor: '#edeeef', strokeDashArray: 3 },
    xaxis: {
      labels: {
        style: {
          colors: '#8392a5', fontSize: '14px', fontWeight: 500, fontFamily: 'DM Sans , sans-serif'
        }
      },
      axisTicks: { show: false },
      axisBorder: { show: false }
    },
    yaxis: {
      labels: { show: false },
      axisTicks: { show: false },
      axisBorder: { show: false }
    }
  }).render();

  // Progress Donut Chart
  new ApexCharts(document.querySelector("#progress-chart"), {
    chart: { type: 'donut', height: 280 },
    states: {
      normal: { filter: { type: 'darken', value: 1 } },
      hover: { filter: { type: 'darken', value: 1 } },
      active: { allowMultipleDataPointsSelection: true, filter: { type: 'darken', value: 1 } },
    },
    stroke: { width: 0 },
    series: [30, 40, 30, 20],
    labels: ['Cardio', 'Stretching', 'Treadmill', 'Strength'],
    colors: ['#00BFA5', '#FF7043', '#F06292', '#7E57C2'],
    legend: { show: false },
    dataLabels: { enabled: false },
    plotOptions: {
      pie: {
        donut: {
          size: '75%',
          labels: {
            show: true,
            name: { show: true, offsetY: -10, color: '#999', fontSize: '14px' },
            value: { show: true, fontSize: '20px', fontWeight: 600, color: '#333', offsetY: 10 },
            total: { show: false }
          }
        }
      }
    },
    tooltip: { enabled: false }
  }).render();

  // Other Gauge Charts
  initGaugeChart('runnin-chart', 80, 100, CodexFitNexus.themeprimary);
  initGaugeChart('sleeping-chart', 60, 100, CodexFitNexus.themesecondary);
  initGaugeChart('weightloss-chart', 40, 100, CodexFitNexus.themeinfo);
  initGaugeChart('weightlifting-chart', 40, 100, CodexFitNexus.themedanger);

  // Workout Slider
  $('.popularworkout-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 300,
    responsive: [
      { breakpoint: 1441, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 481, settings: { slidesToShow: 1 } }
    ]
  });

})();
