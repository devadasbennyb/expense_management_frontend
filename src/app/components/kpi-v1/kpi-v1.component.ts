import { Component, Input, OnInit } from "@angular/core";

export interface KPIV1Model {
  title: string;
  value: string;
  text: string;
  textValue: string;
}

@Component({
  selector: "app-kpi-v1",
  templateUrl: "./kpi-v1.component.html",
  styleUrls: ["./kpi-v1.component.scss"],
})
export class KpiV1Component implements OnInit {
  @Input() input!: KPIV1Model;

  constructor() {}

  ngOnInit(): void {
    // if (!this.input) {
    //   this.input = {
    //     title: "Dummy",
    //     value: "$ 1,00,000",
    //     text: "added today",
    //     textValue: "$ 1,300",
    //   };
    // }
  }
}
