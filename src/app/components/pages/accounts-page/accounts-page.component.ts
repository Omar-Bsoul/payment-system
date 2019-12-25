import { Component, OnInit } from "@angular/core";
import { Account } from "../../../models/Account";
import { AccountService } from "../../../services/account.service";

@Component({
  selector: "app-accounts-page",
  templateUrl: "./accounts-page.component.html",
  styleUrls: ["./accounts-page.component.scss"]
})
export class AccountsPageComponent implements OnInit {
  accounts: Account[];

  constructor(private accountService: AccountService) {}

  ngOnInit(): void {
    this.accountService.getAll().subscribe(accounts => {
      this.accounts = accounts;
    });
  }
}
