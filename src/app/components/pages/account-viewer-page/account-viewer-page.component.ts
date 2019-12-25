import { Component, OnInit, Input } from "@angular/core";
import { AccountService } from "../../../services/account.service";
import { Account } from "../../../models/Account";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-account-viewer-page",
  templateUrl: "./account-viewer-page.component.html",
  styleUrls: ["./account-viewer-page.component.scss"]
})
export class AccountViewerPageComponent implements OnInit {
  id: string;
  account: Account;

  constructor(
    private route: ActivatedRoute,
    private accountService: AccountService
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id");
    this.accountService.getOne(this.id).subscribe(account => {
      this.account = account;
    });
  }
}
