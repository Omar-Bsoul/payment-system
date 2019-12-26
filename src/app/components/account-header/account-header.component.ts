import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-account-header",
  templateUrl: "./account-header.component.html",
  styleUrls: ["./account-header.component.scss"]
})
export class AccountHeaderComponent implements OnInit {
  @Input() plural: boolean;

  constructor() {}

  ngOnInit() {}
}
