import { Component, OnInit } from "@angular/core";
import { Page } from "src/app/models/Page";

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.scss"]
})
export class HomePageComponent implements OnInit {
  pages: Page[];

  constructor() {}

  ngOnInit() {
    this.pages = [
      new Page("Accounts", "supervisor_account", "accounts"),
      new Page("Payments", "payment", "payments")
    ];
  }
}
