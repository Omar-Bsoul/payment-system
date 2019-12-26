import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Payment } from "../models/Payment";

@Injectable({
  providedIn: "root"
})
export class PaymentService {
  baseUrl: string = "http://localhost:8080/payments-system/payment";

  constructor(private http: HttpClient) {}

  getAll(): Observable<Payment[]> {
    return this.http.get<Payment[]>(this.baseUrl);
  }

  getOne(id: string): Observable<Payment> {
    return this.http.get<Payment>(`${this.baseUrl}/${id}`);
  }

  createOne(payment: Payment): Observable<Payment> {
    return this.http.post<Payment>(`${this.baseUrl}/add`, payment, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    });
  }
}
