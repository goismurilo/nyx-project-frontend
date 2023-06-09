import { AfterViewInit, Component, ViewChild, Input, SimpleChanges } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { catchError, map, merge, of, startWith, switchMap } from 'rxjs';
import { IHttpResponse } from 'src/app/interfaces/httpResponse';
import { IPagination } from 'src/app/interfaces/pagination';
import { ExpenseModel } from 'src/app/models/expense';
import { ExpenseService } from 'src/app/services/expense.service';

@Component({
  selector: 'app-expenses-table',
  templateUrl: './expenses-table.component.html',
  styleUrls: ['./expenses-table.component.scss']
})

export class ExpensesTableComponent implements AfterViewInit {
  @Input() pageTitle!: string;
  @Input() searchParam!: number;


  displayedColumns: string[] = ['orgaoNome','valorEmpenhado', 'valorLiquidado', 'valorPago'];
  exampleDatabase!: IHttpResponse;
  data!: ExpenseModel[];

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private expenseService: ExpenseService) {}

  ngAfterViewInit() {

    merge(this.paginator.page)
    .pipe(
      startWith({}),
      switchMap(() => {
        this.isLoadingResults = true;
        const params: IPagination = {
          page: this.paginator.pageIndex,
          size: this.paginator.pageSize
        }

        if (this.pageTitle === "month") {
          return this.expenseService!
            .getExpensesByMonth(
              this.searchParam,
              params
            ).pipe(catchError(() => of(null)));
        } else if(this.pageTitle === "category") {
          return this.expenseService!
          .getExpensesByCategory(
            this.searchParam,
            params
          ).pipe(catchError(() => of(null)));
        } else if(this.pageTitle === "source") {
          return this.expenseService!
          .getExpensesBySource(
            this.searchParam,
            params
          ).pipe(catchError(() => of(null)));
        } else {
          return this.expenseService!
          .getAllExpenses(
            params
          ).pipe(catchError(() => of(null)));
        }
      }),
      map(data => {
        this.isLoadingResults = false;
        this.isRateLimitReached = data === null;

        if (data === null) {
          return [];
        }

        this.resultsLength = data.totalElements;
        return data.content;
      }),
    )
    .subscribe(data => {
      (this.data = data)

      console.log(data)
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    this.ngAfterViewInit()
  }
}
