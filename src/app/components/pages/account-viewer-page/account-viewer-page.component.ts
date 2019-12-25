import { Component, OnInit, Input } from "@angular/core";
import { AccountService } from "../../../services/account.service";

@Component({
  selector: "app-account-viewer-page",
  templateUrl: "./account-viewer-page.component.html",
  styleUrls: ["./account-viewer-page.component.scss"]
})
export class AccountViewerPageComponent implements OnInit {
  @Input() id: string;

  constructor(private accountService: AccountService) {}

  ngOnInit() {}
}
