import { Component,OnInit,AfterViewInit } from '@angular/core';
import * as Chart from 'chart.js'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit  {
  title = 'Chart JS Demo Application in Angular 5 By DotNet Techy';
  BarChart :any;
  PieChart: any;
  PolarAreaChart :any;
  LineChart:any;
  DoughnutChart:any;
  RadarChart:any;

  constructor() {}
  ngOnInit()
  {
      // Bar chart:
    this.BarChart = new Chart('barChart', {
         type: 'bar',
    data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
            label: '# of Votes',
            data: [9,7 , 3, 5, 2, 10],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    }, 
    options: {
        title:{
            text:"Bar Chart",
            display:true
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});
// Polar area chart:
this.PolarAreaChart = new Chart('polarAreaChart', {
         type: 'polarArea',
    data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
            label: '# of Votes',
            data: [9,7 , 3, 5, 2, 10],
            backgroundColor: [
                'rgba(255, 5, 5, 0.2)',
                'rgba(130, 176, 288, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    }, 
    options: {
        title:{
            text:"Polar Area Chart",
            display:true
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});

// Radarchart:
this.RadarChart = new Chart('radarChart', {
         type: 'radar',
    data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
            label: '# of Votes',
            data: [9,7 , 3, 5, 2, 10],
            backgroundColor: [
                'rgba(255, 5, 5, 0.2)',
                'rgba(130, 176, 288, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    }, 
    options: {
        title:{
            text:"Radar Chart",
            display:true
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});

// Line chart:
this.LineChart = new Chart('lineChart', {
         type: 'line',
    data: {
        labels: ["Jan", "Feb", "March", "April", "May", "June"],
        datasets: [{
            label: 'Number of Items Sold in Months',
            data: [9,7 , 3, 5, 2, 10],
            fill:false,
            lineTension:0.2,
            borderColor:"red",
            borderWidth: 1
        }]
    }, 
    options: {
        title:{
            text:"Line Chart",
            display:true
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});


  }
 ngAfterViewInit() {
    // this.canvas = document.getElementById('pieChart');
    // this.ctx = this.canvas.getContext('2d');
    // Pie Chart
    this.PieChart = new Chart('pieChart', {
      type: 'pie',
      data: {
          labels: ["New", "In Progress", "On Hold","Accepted","Rejected"],
          datasets: [{
              label: '# of Votes',
              data: [150,200,300,400,700],
              backgroundColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(255, 175, 96, 1)',
                  'rgba(255, 145, 186, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          title:{
            text:"Pie Chart",
            display:true
        },
        responsive: false,
        display:true,
      }
    });
    // doughnut  chart 
    this.DoughnutChart = new Chart('doughnutChart', {
      type: 'doughnut',
      data: {
          labels: ["New", "In Progress", "On Hold","Accepted","Rejected"],
          datasets: [{
              label: '# of Votes',
              data: [150,200,300,400,700],
              backgroundColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(255, 175, 96, 1)',
                  'rgba(255, 145, 186, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          title:{
            text:"Doughnut Chart",
            display:true
        },
        responsive: false,
        display:true,
      }
    });
}
  }
