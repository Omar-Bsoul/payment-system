import { Component, OnInit } from "@angular/core";
import { Account } from "../../../models/Account";
import { AccountService } from "../../../services/account.service";
import { log } from "util";

@Component({
  selector: "app-accounts-page",
  templateUrl: "./accounts-page.component.html",
  styleUrls: ["./accounts-page.component.scss"]
})
export class AccountsPageComponent implements OnInit {
  accounts: Account[];
  accountsFiltered: Account[];
  search: string;

  constructor(private accountService: AccountService) {}

  ngOnInit(): void {
    this.accountService.getAll().subscribe(accounts => {
      this.accounts = accounts;
    });
  }

  searchBy(_: string) {
    this.search = _;
    if (this.accounts) {
      this.accountsFiltered = this.accounts.filter(account => {
        return (
          account.accountNumber.toString().startsWith(this.search) ||
          account.accountHolderName
            .toLowerCase()
            .includes(this.search.toLowerCase())
        );
      });
    }
  }

  get filter() {
    return this.search && this.search.length > 0;
  }
}
