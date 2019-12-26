import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Validators, FormGroup, FormBuilder } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";
import { PaymentService } from "../../../services/payment.service";
import { CurrencyService } from "src/app/services/currency.service";
import { Payment } from "src/app/models/Payment";

@Component({
  selector: "app-new-payment-page",
  templateUrl: "./new-payment-page.component.html",
  styleUrls: ["./new-payment-page.component.scss"]
})
export class NewPaymentPageComponent implements OnInit {
  paymentForm: FormGroup;
  currencies: string[];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private paymentService: PaymentService,
    private currencyService: CurrencyService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.currencyService.getAll().subscribe((currencies: string[]) => {
      this.currencies = currencies;
    });

    this.paymentForm = this.fb.group({
      source: [
        null,
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(6),
          Validators.pattern(/^[0-9]*$/)
        ]
      ],
      destination: [
        null,
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(6),
          Validators.pattern(/^[0-9]*$/)
        ]
      ],
      amount: [
        null,
        [
          Validators.required,
          Validators.minLength(1),
          Validators.pattern(/^[0-9]*$/)
        ]
      ],
      currency: ["", [Validators.required]],
      description: [""]
    });
  }

  get source() {
    return this.paymentForm.get("source");
  }

  get sourceError() {
    const lengthError =
      this.source.errors.minlength || this.source.errors.maxlength;
    if (this.source.errors.required) {
      return "Payment source account is required";
    } else if (this.source.errors.pattern) {
      return "Payment source account must contain only digits";
    } else if (lengthError) {
      return "Payment source account length must be 6 digits";
    } else if (this.source.value === this.description.value) {
      return "Source can not be the same as destination";
    }
  }

  get destination() {
    return this.paymentForm.get("destination");
  }

  get destinationError() {
    const lengthError =
      this.destination.errors.minlength || this.destination.errors.maxlength;
    if (this.destination.errors.required) {
      return "Payment destination account is required";
    } else if (this.destination.errors.pattern) {
      return "Payment destination account must contain only digits";
    } else if (lengthError) {
      return "Payment destination account length must be 6 digits";
    } else if (this.source.value === this.description.value) {
      return "Source can not be the same as destination";
    }
  }

  get amount() {
    return this.paymentForm.get("amount");
  }

  get amountError() {
    if (this.amount.errors.required) {
      return "Payment amount is required";
    } else if (this.amount.errors.pattern) {
      return "Payment amount must contain only digits";
    } else if (this.amount.errors.minlength && this.amount.value > 1) {
      return "Payment amount must be greater than 1";
    }
  }

  get currency() {
    return this.paymentForm.get("currency");
  }

  get currencyError() {
    if (this.currency.errors.required) {
      return "Payment currency is required";
    } else if (this.currency.errors.minlength) {
      return "Payment currency must be one of the predefined currencies";
    }
  }

  get description() {
    return this.paymentForm.get("description");
  }

  get descriptionError() {
    return this.description.errors;
  }

  get payment() {
    console.log(this.currency);

    return new Payment(
      null,
      this.amount.value,
      this.currency.value,
      this.source.value,
      this.destination.value,
      this.description.value
    );
  }

  submit() {
    !this.paymentForm.invalid &&
      this.paymentService.createOne(this.payment).subscribe(
        payment => {
          this.router.navigateByUrl("/payments");
          this.snackBar.open("payment created successfully", null, {
            duration: 2000
          });
        },
        error => {
          this.snackBar.open(error.error, null, {
            duration: 2000
          });
        }
      );
  }
}
