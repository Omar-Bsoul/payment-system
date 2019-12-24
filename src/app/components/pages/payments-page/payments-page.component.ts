import { Component, OnInit } from "@angular/core";
import { Payment } from "src/app/models/Payment";

@Component({
  selector: "app-payments-page",
  templateUrl: "./payments-page.component.html",
  styleUrls: ["./payments-page.component.scss"]
})
export class PaymentsPageComponent implements OnInit {
  payments: Payment[];

  constructor() {}

  ngOnInit() {
    this.payments = [
      new Payment(),
      new Payment(),
      new Payment(),
      new Payment(),
      new Payment(),
      new Payment(),
      new Payment(),
      new Payment(),
      new Payment(),
      new Payment(),
      new Payment(),
      new Payment(),
      new Payment(),
      new Payment()
    ];
  }
}
