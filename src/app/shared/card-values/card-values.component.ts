import { AfterViewInit, Component, Input, SimpleChanges } from '@angular/core';
import { ITotalAmount } from 'src/app/interfaces/totalAmount';
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

  @Input() pageTitle!: string;
  @Input() infoPage!: ITotalAmount;

  constructor(private expenseService: ExpenseService) {}

  ngAfterViewInit(): void {
    if (this.pageTitle === 'dashboard') {
      this.expenseService.getTotalAmountExpenses().subscribe(data => {
        this.pledged = data.pledged;
        this.paidOff = data.paidOff;
        this.paid = data.paid;
      })
    } else {
      if(this.infoPage) {
        this.pledged = this.infoPage.pledged;
        this.paidOff = this.infoPage.paidOff;
        this.paid = this.infoPage.paid;
      }
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    this.ngAfterViewInit()
  }

}

