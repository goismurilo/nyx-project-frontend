import { ExpenseModel } from "../models/expense";

export interface IHttpResponse {
  content: ExpenseModel[];

  totalElements: number;
  totalPages: number;
  size: number;
  numberOfElements: number;
}
