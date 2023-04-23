import { Component, OnInit } from '@angular/core';
import { IMonth } from '../../interfaces/months';

@Component({
  selector: 'app-month',
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.scss']
})
export class MonthComponent implements OnInit {

  pageTitle = 'Month';

  monthSelected: any = 1;
  searchParam = this.monthSelected;

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

  ngOnInit(): void {
  }

  onChangeMonth(): void {
    this.searchParam = this.monthSelected;
  }

}
