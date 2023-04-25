import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { ExpenseService } from 'src/app/services/expense.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  pageTitle = "dashboard";
  isLoadingResults = true;

  barChart: any = [];
  areaChart: any = [];

  pledged: any = [];
  paid: any = [];
  paidOff: any = [];
  sourceLabels: any = [];
  sourceValues: any = [];

  constructor(private expenseService: ExpenseService) {
    Chart.register(...registerables);


  }

  ngOnInit(): void {
    this.expenseService.getAllInfoExpenses('month').subscribe(
      data => {
        for (const month of data) {
          this.pledged.push(month.pledged)
          this.paid.push(month.paid)
          this.paidOff.push(month.paidOff)
        }
        this.isLoadingResults = false;

        this.createBarChart();
      })

      this.expenseService.getAllInfoExpenses('source').subscribe(
        data => {
          for (const source of data) {
            this.sourceLabels.push(source.name)
            this.sourceValues.push(source.numbers)
          }

          this.createAreaChart();
        })
  }

  createBarChart(){
    this.barChart = new Chart("graph", {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov','Dec'],
	       datasets: [
          {
            label: "Empenhados",
            data: this.pledged,
            backgroundColor: '#ef476f'
          },
          {
            label: "Liquidados",
            data: this.paidOff,
            backgroundColor: '#ffd166'
          },
          {
            label: "Pagos",
            data: this.paid,
            backgroundColor: '#06d6a0'
          }
        ]
      },
      options: {
        aspectRatio:2.5
      }
    });
  }

  createAreaChart() {
    this.areaChart = new Chart("area", {
      type: "polarArea",
      data: {
        datasets: [{
          data: this.sourceValues
      }],

      // These labels appear in the legend and in the tooltips when hovering different arcs
      labels: this.sourceLabels
      }
    });
  }


}
