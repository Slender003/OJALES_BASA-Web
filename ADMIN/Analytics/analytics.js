const sideBar = document.querySelector(".toggle-btn");

sideBar.addEventListener("click", function () {
  document.querySelector("#sidebar").classList.toggle("expand");
});

function createLineChart(canvasId, data, labels, label, borderColor) {
  var ctx = document.getElementById(canvasId).getContext('2d');
  var myChart = new Chart(ctx, {
      type: 'line',
      data: {
          labels: labels,
          datasets: [{
              label: label,
              data: data,
              fill: false,
              borderColor: borderColor,
              tension: 0.1
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });
}

var totalSalesData = [1250000, 1350000, 1500000];
var totalSalesLabels = ['January', 'February', 'March'];

var expensesData = [5000000, 4550000, 4440500];
var expensesLabels = ['January', 'February', 'March'];

var incomeData = [6005000, 6080000, 6808900];
var incomeLabels = ['January', 'February', 'March'];

createLineChart('totalSalesChart', totalSalesData, totalSalesLabels, 'Total Sales', 'rgb(75, 192, 192)');
createLineChart('expensesChart', expensesData, expensesLabels, 'Expenses', 'rgb(255, 99, 132)');
createLineChart('incomeChart', incomeData, incomeLabels, 'Income', 'rgb(255, 205, 86)');
