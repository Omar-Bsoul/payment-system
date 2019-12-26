import { Component, OnInit } from "@angular/core";
import { PaymentService } from "src/app/services/payment.service";
import { ActivatedRoute } from "@angular/router";
import { Payment } from "src/app/models/Payment";

@Component({
  selector: "app-payment-viewer-page",
  templateUrl: "./payment-viewer-page.component.html",
  styleUrls: ["./payment-viewer-page.component.scss"]
})
export class PaymentViewerPageComponent implements OnInit {
  id: string;
  payment: Payment;

  constructor(
    private route: ActivatedRoute,
    private paymentService: PaymentService
  ) {}

  ngOnInit() {
    this.payment = new Payment();
    this.id = this.route.snapshot.paramMap.get("id");
    this.paymentService.getOne(this.id).subscribe(payment => {
      this.payment = payment;
    });
  }
}
