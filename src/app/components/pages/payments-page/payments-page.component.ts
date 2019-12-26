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
  paymentsFiltered: Payment[];
  search: string;
  filter: boolean;

  constructor(private paymentService: PaymentService) {}

  ngOnInit() {
    this.paymentService.getAll().subscribe(payments => {
      this.payments = payments;
    });
  }

  searchBy(_: string) {
    this.search = _;

    if (this.payments) {
      this.filter = this.search && this.search.length > 0;
      this.paymentsFiltered = this.payments.filter(payment => {
        return (
          payment.sourceAccountNumber.toString().startsWith(this.search) ||
          payment.destinationAccountNumber.toString().startsWith(this.search)
        );
      });
    }
  }
}
