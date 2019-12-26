import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Account } from "../models/Account";

@Injectable({
  providedIn: "root"
})
export class AccountService {
  baseUrl: string = "http://localhost:8080/payments-system/account";

  constructor(private http: HttpClient) {}

  getAll(): Observable<Account[]> {
    return this.http.get<Account[]>(this.baseUrl);
  }

  getOne(id: string): Observable<Account> {
    return this.http.get<Account>(`${this.baseUrl}/${id}`);
  }

  createOne(account: Account): Observable<Account> {
    return this.http.post<Account>(`${this.baseUrl}/add`, account, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    });
  }
}
