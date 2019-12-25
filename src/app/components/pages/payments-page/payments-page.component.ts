import { Component, OnInit } from "@angular/core";
import { Payment } from "../../../models/Payment";
import { PaymentService } from "../../../services/payment.service";

@Component({
  selector: "app-payments-page",
  templateUrl: "./payments-page.component.html",
  styleUrls: ["./payments-page.component.scss"]
})
export class PaymentsPageComponent implements OnInit {
  payments: Payment[];

  constructor(private paymentService: PaymentService) {}

  ngOnInit() {
    this.paymentService.getAll().subscribe(payments => {
      this.payments = payments;
    });
  }
}
