import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import * as CanvasJS from '../canvasjs.min';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  type:string;
  chart:any;
  constructor(private routeParams: ActivatedRoute) {
  }

  ngOnInit() {
    this.routeParams.params.subscribe(params => {
      console.log(params.type);
      this.type = params.type;
      this.createChart();
    });
    
  }

  createChart():void {
    let dataPoints = [
      { y: 71, label: "Java" },
      { y: 55, label: "Oracle" },
      { y: 50, label: "Angular" },
      { y: 65, label: "Angular Js" }
    ];

    this.chart = new CanvasJS.Chart("chartContainer", {
      animationEnabled: true,
      // title: {
      //   text: "Basic Column Chart in Angular 5"
      // },
      data: [{
        type: this.type,
        dataPoints: dataPoints
      }]
    });
    this.chart.render();
  }
}
