import { Component, OnInit } from "@angular/core";
import { Account } from "src/app/models/Account";

@Component({
  selector: "app-accounts-page",
  templateUrl: "./accounts-page.component.html",
  styleUrls: ["./accounts-page.component.scss"]
})
export class AccountsPageComponent implements OnInit {
  accounts: Account[];

  constructor() {}

  ngOnInit(): void {
    this.accounts = [
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
    ];
  }
}
