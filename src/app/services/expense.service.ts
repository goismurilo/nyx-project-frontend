import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IHttpResponse } from '../interfaces/httpResponse';
import { IPagination } from '../interfaces/pagination';
import { ITotalAmount } from '../interfaces/totalAmount';


@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  private readonly baseUrl = "http://localhost:8080/expenses"

  constructor(private _httpClient: HttpClient) { }
  exp!: IHttpResponse;

  getAllExpenses(page: IPagination): Observable<IHttpResponse> {
    const params = {
      size: page.size,
      page: page.page,
    };
    return this._httpClient.get<IHttpResponse>(`${this.baseUrl}`, { params })
  }

  getTotalAmountExpenses(): Observable<ITotalAmount> {
    return this._httpClient.get<ITotalAmount>(`${this.baseUrl}/amount`)
  }

  getAllInfoExpenses(pageTitle: string): Observable<ITotalAmount[]> {
    const params = {
      name: pageTitle,

    };
    return this._httpClient.get<ITotalAmount[]>(`${this.baseUrl}/info`, { params });
  }

  getExpensesByMonth(month: number, page: IPagination): Observable<IHttpResponse> {
    const params = {
      size: page.size,
      page: page.page,
    };
    return this._httpClient.get<IHttpResponse>(`${this.baseUrl}/month/${month}`, { params })
  }

  getExpensesByCategory(category: number, page: IPagination): Observable<IHttpResponse> {
    const params = {
      size: page.size,
      page: page.page,
    };
    return this._httpClient.get<IHttpResponse>(`${this.baseUrl}/category/${category}`, { params })
  }

  getExpensesBySource(source: number, page: IPagination): Observable<IHttpResponse> {
    const params = {
      size: page.size,
      page: page.page,
    };
    return this._httpClient.get<IHttpResponse>(`${this.baseUrl}/source/${source}`, { params })
  }
}
