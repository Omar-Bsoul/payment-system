import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-data-viewer-field",
  templateUrl: "./data-viewer-field.component.html",
  styleUrls: ["./data-viewer-field.component.scss"]
})
export class DataViewerFieldComponent implements OnInit {
  @Input() label: string;
  @Input() value: string;
  @Input() icon: string;

  constructor() {}

  ngOnInit() {}
}
