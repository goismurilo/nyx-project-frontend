import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IHttpResponse } from '../interfaces/httpResponse';
import { IPagination } from '../interfaces/pagination';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  private readonly baseUrl = "http://localhost:8080/expenses"

  constructor(private _httpClient: HttpClient) { }
  exp!: IHttpResponse;

  getExpensesByMonth(month: number, page: IPagination): Observable<IHttpResponse> {
    const params = {
      size: page.size,
      page: page.page,
    };
    return this._httpClient.get<IHttpResponse>(`${this.baseUrl}/month/${month}`, { params })
  }


}