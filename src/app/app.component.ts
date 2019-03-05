import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular-chartjs';
  lineChart=[];
  barChart = [];
  //entity = []; so it can be seen in dom
  constructor(){}
  ngOnInit(){
    this.lineChart = new Chart('lineChart'/*id*/,{//data to control chart
      type:'line'/*type of chart*/,
      data:{
        labels:["Jan", "Feb", "Mar", "Apr","May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],//data under table
        datasets:[{
          label:'Number of items sold in month',//what thatt chart for

          data:[9, 7, 3, 5, 2, 10, 15, 16, 19, 3, 1, 9],//must be equal to labels
          fill:false,//some css start controls the style of chart
          lineTenson:0.2,
          borderColor:'red',
          borderWidth:1
          //css ends
        }]
      },
      options:{
        title:{//name of chart
          text:"Line Chart",
          display:true //show or not
        },
        scales:{
          yAxes:[{
            ticks:{
              beginAtZero:true
            }
          }]
        }
      }
    });
  //bar Chart
  this.barChart = new Chart('barChart',{
    type:'bar',
    data:{
      labels:["Jan", "Feb", "Mar", "Apr","May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets:[{
        label:'Number of items sold in month',
        data:[9, 7, 3, 5, 2, 10, 15, 16, 19, 3, 1, 9],
        fill:true,
        lineTenson:0.2,
        borderColor:'red',
        borderWidth:1
      }]
    },
    options:{
      title:{
        text:"Bar Chart",
        display:true
      },
      scales:{
        yAxes:[{
          ticks:{
            beginAtZero:true
          }
        }]
      }
    }
  });
}
}
