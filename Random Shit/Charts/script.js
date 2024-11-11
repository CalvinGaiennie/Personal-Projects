// Store chart instances globally
let scatterChart,
  barChart,
  lineChart,
  radarChart,
  doughnutChart,
  pieChart,
  polarChart,
  bubbleChart;

document.getElementById("submit").addEventListener("click", function () {
  const xData = document.getElementById("xData").value.split(",").map(Number);
  const yData = document.getElementById("yData").value.split(",").map(Number);
  const scatterData = xData.map((x, i) => ({ x: x, y: yData[i] }));

  // Destroy the old chart if it exists
  if (scatterChart) scatterChart.destroy();

  // Create the new chart
  scatterChart = new Chart(document.getElementById("myChart"), {
    type: "scatter",
    data: {
      datasets: [
        {
          label: "Scatter Dataset",
          data: scatterData,
          backgroundColor: "rgba(75, 192, 192, 0.6)",
        },
      ],
    },
    options: {
      scales: {
        x: { type: "linear", position: "bottom" },
      },
    },
  });
});

document.getElementById("submitBar").addEventListener("click", function () {
  const labels = document.getElementById("xDataBar").value.split(",");
  const amounts = document
    .getElementById("yDataBar")
    .value.split(",")
    .map(Number);

  // Destroy the old chart if it exists
  if (barChart) barChart.destroy();

  // Create the new chart
  barChart = new Chart(document.getElementById("myChartBar"), {
    type: "bar",
    data: {
      labels: labels,
      datasets: [
        {
          label: "Bar Dataset",
          data: amounts,
          backgroundColor: "rgba(255, 99, 132, 0.6)",
        },
      ],
    },
  });
});

document.getElementById("submitLine").addEventListener("click", function () {
  const labels = document.getElementById("xDataLine").value.split(",");
  const amounts = document
    .getElementById("yDataLine")
    .value.split(",")
    .map(Number);

  // Destroy the old chart if it exists
  if (lineChart) lineChart.destroy();

  // Create the new chart
  lineChart = new Chart(document.getElementById("myChartLine"), {
    type: "line",
    data: {
      labels: labels,
      datasets: [
        {
          label: "Line Dataset",
          data: amounts,
          borderColor: "rgba(75, 192, 192, 1)",
          fill: false,
        },
      ],
    },
  });
});

document.getElementById("submitRadar").addEventListener("click", function () {
  const labels = document.getElementById("xDataRadar").value.split(",");
  const amounts = document
    .getElementById("yDataRadar")
    .value.split(",")
    .map(Number);

  // Destroy the old chart if it exists
  if (radarChart) radarChart.destroy();

  // Create the new chart
  radarChart = new Chart(document.getElementById("myChartRadar"), {
    type: "radar",
    data: {
      labels: labels,
      datasets: [
        {
          label: "Radar Dataset",
          data: amounts,
          backgroundColor: "rgba(153, 102, 255, 0.6)",
        },
      ],
    },
  });
});

document
  .getElementById("submitDoughnut")
  .addEventListener("click", function () {
    const labels = document.getElementById("xDataDoughnut").value.split(",");
    const amounts = document
      .getElementById("yDataDoughnut")
      .value.split(",")
      .map(Number);

    // Destroy the old chart if it exists
    if (doughnutChart) doughnutChart.destroy();

    // Create the new chart
    doughnutChart = new Chart(document.getElementById("myChartDoughnut"), {
      type: "doughnut",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Doughnut Dataset",
            data: amounts,
            backgroundColor: [
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)",
            ],
          },
        ],
      },
    });
  });

document.getElementById("submitPie").addEventListener("click", function () {
  const labels = document.getElementById("xDataPie").value.split(",");
  const amounts = document
    .getElementById("yDataPie")
    .value.split(",")
    .map(Number);

  // Destroy the old chart if it exists
  if (pieChart) pieChart.destroy();

  // Create the new chart
  pieChart = new Chart(document.getElementById("myChartPie"), {
    type: "pie",
    data: {
      labels: labels,
      datasets: [
        {
          label: "Pie Dataset",
          data: amounts,
          backgroundColor: [
            "rgba(75, 192, 192, 0.6)",
            "rgba(153, 102, 255, 0.6)",
            "rgba(255, 159, 64, 0.6)",
          ],
        },
      ],
    },
  });
});

document.getElementById("submitPolar").addEventListener("click", function () {
  const labels = document.getElementById("xDataPolar").value.split(",");
  const amounts = document
    .getElementById("yDataPolar")
    .value.split(",")
    .map(Number);

  // Destroy the old chart if it exists
  if (polarChart) polarChart.destroy();

  // Create the new chart
  polarChart = new Chart(document.getElementById("myChartPolar"), {
    type: "polarArea",
    data: {
      labels: labels,
      datasets: [
        {
          label: "Polar Area Dataset",
          data: amounts,
          backgroundColor: [
            "rgba(255, 99, 132, 0.6)",
            "rgba(54, 162, 235, 0.6)",
            "rgba(255, 206, 86, 0.6)",
          ],
        },
      ],
    },
  });
});

document.getElementById("submitBubble").addEventListener("click", function () {
  const xData = document
    .getElementById("xDataBubble")
    .value.split(",")
    .map(Number);
  const yData = document
    .getElementById("yDataBubble")
    .value.split(",")
    .map(Number);
  const bubbleSizes = document
    .getElementById("bubbleSizes")
    .value.split(",")
    .map(Number);

  const bubbleData = xData.map((x, i) => ({
    x: x,
    y: yData[i],
    r: bubbleSizes[i],
  }));

  // Destroy the old chart if it exists
  if (bubbleChart) bubbleChart.destroy();

  // Create the new chart
  bubbleChart = new Chart(document.getElementById("myChartBubble"), {
    type: "bubble",
    data: {
      datasets: [
        {
          label: "Bubble Dataset",
          data: bubbleData,
          backgroundColor: "rgba(255, 99, 132, 0.6)",
        },
      ],
    },
    options: {
      scales: {
        x: { type: "linear", position: "bottom" },
      },
    },
  });
});
