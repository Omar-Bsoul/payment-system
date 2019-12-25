import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-data-viewer-card",
  templateUrl: "./data-viewer-card.component.html",
  styleUrls: ["./data-viewer-card.component.scss"]
})
export class DataViewerCardComponent implements OnInit {
  @Input() label: string;
  @Input() content: string;
  @Input() icon: string;

  constructor() {}

  ngOnInit() {}
}
