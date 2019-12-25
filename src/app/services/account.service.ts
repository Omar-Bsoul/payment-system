import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, Observer } from "rxjs";
import { Account } from "../models/Account";

@Injectable({
  providedIn: "root"
})
export class AccountService {
  baseUrl: string = "http://localhost:8080/payments-system/account";

  constructor(private http: HttpClient) {}

  getAll(): Observable<Account[]> {
    return Observable.create((observer: Observer<Account[]>) => {
      observer.next([
        new Account(
          "abcd",
          875,
          "Some Body",
          "09977225511",
          "No Description at all."
        ),
        new Account(
          "abcd",
          875,
          "Some Body",
          "09977225511",
          "No Description at all."
        ),
        new Account(
          "abcd",
          875,
          "Some Body",
          "09977225511",
          "No Description at all."
        ),
        new Account(
          "abcd",
          875,
          "Some Body",
          "09977225511",
          "No Description at all."
        ),
        new Account(
          "abcd",
          875,
          "Some Body",
          "09977225511",
          "No Description at all."
        ),
        new Account(
          "abcd",
          875,
          "Some Body",
          "09977225511",
          "No Description at all."
        ),
        new Account(
          "abcd",
          875,
          "Some Body",
          "09977225511",
          "No Description at all."
        ),
        new Account(
          "abcd",
          875,
          "Some Body",
          "09977225511",
          "No Description at all."
        ),
        new Account(
          "abcd",
          875,
          "Some Body",
          "09977225511",
          "No Description at all."
        ),
        new Account(
          "abcd",
          875,
          "Some Body",
          "09977225511",
          "No Description at all."
        ),
        new Account(
          "abcd",
          875,
          "Some Body",
          "09977225511",
          "No Description at all."
        ),
        new Account(
          "abcd",
          875,
          "Some Body",
          "09977225511",
          "No Description at all."
        ),
        new Account(
          "abcd",
          875,
          "Some Body",
          "09977225511",
          "No Description at all."
        ),
        new Account(
          "abcd",
          875,
          "Some Body",
          "09977225511",
          "No Description at all."
        ),
        new Account(
          "abcd",
          875,
          "Some Body",
          "09977225511",
          "No Description at all."
        ),
        new Account(
          "abcd",
          875,
          "Some Body",
          "09977225511",
          "No Description at all."
        ),
        new Account(
          "abcd",
          875,
          "Some Body",
          "09977225511",
          "No Description at all."
        ),
        new Account(
          "abcd",
          875,
          "Some Body",
          "09977225511",
          "No Description at all."
        ),
        new Account(
          "abcd",
          875,
          "Some Body",
          "09977225511",
          "No Description at all."
        ),
        new Account(
          "abcd",
          875,
          "Some Body",
          "09977225511",
          "No Description at all."
        ),
        new Account(
          "abcd",
          875,
          "Some Body",
          "09977225511",
          "No Description at all."
        ),
        new Account(
          "abcd",
          875,
          "Some Body",
          "09977225511",
          "No Description at all."
        ),
        new Account(
          "abcd",
          875,
          "Some Body",
          "09977225511",
          "No Description at all."
        ),
        new Account(
          "abcd",
          875,
          "Some Body",
          "09977225511",
          "No Description at all."
        ),
        new Account(
          "abcd",
          875,
          "Some Body",
          "09977225511",
          "No Description at all."
        ),
        new Account(
          "abcd",
          875,
          "Some Body",
          "09977225511",
          "No Description at all."
        )
      ]);
      observer.complete();
    });
    //return this.http.get<Account[]>(this.baseUrl);
  }

  getOne(id: string): Observable<Account> {
    return this.http.get<Account>(`${this.baseUrl}/${id}`);
  }

  createOne(payment: Account): Observable<Account> {
    return this.http.post<Account>(`${this.baseUrl}/add`, payment, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    });
  }
}
