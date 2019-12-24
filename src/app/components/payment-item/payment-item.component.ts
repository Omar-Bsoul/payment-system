import { Component, OnInit, Input } from "@angular/core";
import { Payment } from "src/app/models/Payment";

@Component({
  selector: "app-payment-item",
  templateUrl: "./payment-item.component.html",
  styleUrls: ["./payment-item.component.scss"]
})
export class PaymentItemComponent implements OnInit {
  @Input() payment: Payment;

  constructor() {}

  ngOnInit() {}
}
