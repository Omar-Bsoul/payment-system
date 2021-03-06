import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-payment-header",
  templateUrl: "./payment-header.component.html",
  styleUrls: ["./payment-header.component.scss"]
})
export class PaymentHeaderComponent implements OnInit {
  @Input() plural: boolean;

  constructor() {}

  ngOnInit() {}
}
