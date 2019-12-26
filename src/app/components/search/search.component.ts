import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"]
})
export class SearchComponent implements OnInit {
  @Input() searchBy: string;
  @Input() ngModel: string;

  @Output() ngModelChange: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}
}
