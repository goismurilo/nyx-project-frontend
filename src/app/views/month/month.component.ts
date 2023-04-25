import { Component, OnInit } from '@angular/core';
import { IMonth } from '../../interfaces/months';
import { ITotalAmount } from 'src/app/interfaces/totalAmount';
import { ExpenseService } from 'src/app/services/expense.service';

@Component({
  selector: 'app-month',
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.scss']
})
export class MonthComponent implements OnInit {

  pageTitle = 'month';
  infoPage!: ITotalAmount;
  searchParam!: number;
  monthSelected: number = 1;
  monthData!:ITotalAmount[];

  months: IMonth[] = [
    {value: 1, viewValue: 'Janeiro'},
    {value: 2, viewValue: 'Fevereiro'},
    {value: 3, viewValue: 'Março'},
    {value: 4, viewValue: 'Abril'},
    {value: 5, viewValue: 'Maio'},
    {value: 6, viewValue: 'Junho'},
    {value: 7, viewValue: 'Julho'},
    {value: 8, viewValue: 'Agosto'},
    {value: 9, viewValue: 'Setembro'},
    {value: 10, viewValue: 'Outubro'},
    {value: 11, viewValue: 'Novembro'},
    {value: 12, viewValue: 'Dezembro'},
  ];

  constructor(private expenseService: ExpenseService) {}

  ngOnInit(): void {
    this.expenseService.getAllInfoExpenses(this.pageTitle).subscribe(data => {
      this.infoPage = data[0];
      this.monthData = data;
      this.searchParam = data[0].code;
    })
  }

  onChangeMonth(): void {
    this.searchParam = this.monthSelected;
    this.infoPage = this.monthData.filter(month => month.code === this.monthSelected)[0];
  }

}
