import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Validators, FormGroup, FormBuilder } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";
import { AccountService } from "../../../services/account.service";
import { Account } from "../../../models/Account";

@Component({
  selector: "app-new-account-page",
  templateUrl: "./new-account-page.component.html",
  styleUrls: ["./new-account-page.component.scss"]
})
export class NewAccountPageComponent implements OnInit {
  accountForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private accountService: AccountService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.accountForm = this.fb.group({
      holderName: ["", [Validators.required, Validators.minLength(3)]],
      number: [
        null,
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(6),
          Validators.pattern(/^[0-9]*$/)
        ]
      ],
      phone: ["", [Validators.pattern(/^\+?(?:[0-9]●?){6,14}[0-9]$/)]],
      description: [""]
    });
  }

  get holderName() {
    return this.accountForm.get("holderName");
  }

  get holderNameError() {
    if (this.holderName.errors.required) {
      return "Account holder name is required";
    } else if (this.holderName.errors.minlength) {
      return "Account holder name length must be greater than 3 characters";
    }
  }

  get number() {
    return this.accountForm.get("number");
  }

  get numberError() {
    const lengthError =
      this.number.errors.minlength || this.number.errors.maxlength;
    if (this.number.errors.required) {
      return "Account number is required";
    } else if (this.number.errors.pattern) {
      return "Account number must contain only digits";
    } else if (lengthError) {
      return "Account number length must be 6 digits";
    }
  }

  get phone() {
    return this.accountForm.get("phone");
  }

  get phoneError() {
    return this.phone.errors.pattern && "Not a valid phone number";
  }

  get description() {
    return this.accountForm.get("description");
  }

  get descriptionError() {
    return this.description.errors;
  }

  get account() {
    return new Account(
      null,
      this.number.value,
      this.holderName.value,
      this.phone.value,
      this.description.value
    );
  }

  submit() {
    !this.accountForm.invalid &&
      this.accountService.createOne(this.account).subscribe(
        account => {
          this.router.navigateByUrl("/accounts");
          this.snackBar.open("Account created successfully", null, {
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
