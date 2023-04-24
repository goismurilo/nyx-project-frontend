import { AfterViewInit, Component } from '@angular/core';
import { ExpenseService } from 'src/app/services/expense.service';

@Component({
  selector: 'app-card-values',
  templateUrl: './card-values.component.html',
  styleUrls: ['./card-values.component.scss']
})
export class CardValuesComponent implements AfterViewInit{
  pledged: number = 0;
  paidOff: number = 0;
  paid: number = 0;

  constructor(private expenseService: ExpenseService) {}

  ngAfterViewInit(): void {
    this.expenseService.getTotalAmountExpenses().subscribe(data => {
      this.pledged = data.pledged;
      this.paidOff = data.paidOff;
      this.paid = data.paid;
    })
  }

}
