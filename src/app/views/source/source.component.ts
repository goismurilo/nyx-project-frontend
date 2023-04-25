import { Component, OnInit } from '@angular/core';
import { ITotalAmount } from 'src/app/interfaces/totalAmount';
import { ExpenseService } from 'src/app/services/expense.service';

@Component({
  selector: 'app-source',
  templateUrl: './source.component.html',
  styleUrls: ['./source.component.scss']
})
export class SourceComponent implements OnInit {
  pageTitle = "source";
  searchParam!: number;
  infoPage!: ITotalAmount;
  sources!: ITotalAmount[];
  sourceSelected!: number;

  constructor(private expenseService: ExpenseService) {}

  ngOnInit(): void {
    this.expenseService.getAllInfoExpenses(this.pageTitle).subscribe(data => {
      this.infoPage = data[0];
      this.sources = data;
      this.sourceSelected = data[0].code;
      this.searchParam = data[0].code;
    })
  }

  onChangeSource(): void {
    this.searchParam = this.sourceSelected;
    this.infoPage = this.sources.filter(source => source.code === this.sourceSelected)[0];
  }
}
