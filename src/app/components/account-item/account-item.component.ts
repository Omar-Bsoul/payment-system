import { Component, OnInit, Input } from "@angular/core";
import { Account } from "src/app/models/Account";

@Component({
  selector: "app-account-item",
  templateUrl: "./account-item.component.html",
  styleUrls: ["./account-item.component.scss"]
})
export class AccountItemComponent implements OnInit {
  @Input() account: Account;

  constructor() {}

  ngOnInit(): void {}
}
