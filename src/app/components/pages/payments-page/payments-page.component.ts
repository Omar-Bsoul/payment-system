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
      new Payment(
        "Payment Id",
        20,
        "usd",
        88775664285,
        9541715085,
        "No Desc At All"
      ),
      new Payment(
        "Payment Id",
        20,
        "usd",
        88775664285,
        9541715085,
        "No Desc At All"
      ),
      new Payment(
        "Payment Id",
        20,
        "usd",
        88775664285,
        9541715085,
        "No Desc At All"
      ),
      new Payment(
        "Payment Id",
        20,
        "usd",
        88775664285,
        9541715085,
        "No Desc At All"
      ),
      new Payment(
        "Payment Id",
        20,
        "usd",
        88775664285,
        9541715085,
        "No Desc At All"
      ),
      new Payment(
        "Payment Id",
        20,
        "usd",
        88775664285,
        9541715085,
        "No Desc At All"
      ),
      new Payment(
        "Payment Id",
        20,
        "usd",
        88775664285,
        9541715085,
        "No Desc At All"
      ),
      new Payment(
        "Payment Id",
        20,
        "usd",
        88775664285,
        9541715085,
        "No Desc At All"
      ),
      new Payment(
        "Payment Id",
        20,
        "usd",
        88775664285,
        9541715085,
        "No Desc At All"
      ),
      new Payment(
        "Payment Id",
        20,
        "usd",
        88775664285,
        9541715085,
        "No Desc At All"
      ),
      new Payment(
        "Payment Id",
        20,
        "usd",
        88775664285,
        9541715085,
        "No Desc At All"
      ),
      new Payment(
        "Payment Id",
        20,
        "usd",
        88775664285,
        9541715085,
        "No Desc At All"
      ),
      new Payment(
        "Payment Id",
        20,
        "usd",
        88775664285,
        9541715085,
        "No Desc At All"
      ),
      new Payment(
        "Payment Id",
        20,
        "usd",
        88775664285,
        9541715085,
        "No Desc At All"
      )
    ];
  }
}
