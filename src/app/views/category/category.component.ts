import { Component, OnInit } from '@angular/core';
import { ITotalAmount } from 'src/app/interfaces/totalAmount';
import { ExpenseService } from 'src/app/services/expense.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  pageTitle = "category";
  infoPage!: ITotalAmount;
  categories!: ITotalAmount[];
  searchParam!: number;
  categorySelected!: number;

  constructor(private expenseService: ExpenseService){ }
  ngOnInit(): void {
    this.expenseService.getAllInfoExpenses(this.pageTitle).subscribe(data => {
      this.infoPage = data[0];
      this.categories = data;
      this.categorySelected = data[0].code;
      this.searchParam = data[0].code;
    })

  }

  ngAfterViewInit(): void {

  }

  onChangeCategory(): void {
    this.searchParam = this.categorySelected;
    this.infoPage = this.categories.filter(cat => cat.code === this.categorySelected)[0];
  }
}
