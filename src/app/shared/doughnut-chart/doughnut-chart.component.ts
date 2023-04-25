import { Component, Input, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { ExpenseService } from 'src/app/services/expense.service';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.scss']
})
export class DoughnutChartComponent implements OnInit{
  isLoadingResults = true;

  chart: any = []
  labels: any = [];
  values: any = [];

  constructor(private expenseService: ExpenseService) {
    Chart.register(...registerables);

  }


  ngOnInit(): void {
    this.expenseService.getAllInfoExpenses('source').subscribe(data => {

      for (const category of data) {
        this.labels.push(category.name)
        this.values.push(category.numbers)
      }

      console.log("values", data)
      this.createChart()
      this.isLoadingResults = false;
    });
  }

  createChart(){
    this.chart = new Chart("graphic", {
      type: 'doughnut',
      data: {
        datasets: [{
            data: this.values
        }],

        // These labels appear in the legend and in the tooltips when hovering different arcs
        labels: this.labels
      }
    });
  }

}


