import { Component, OnInit } from "@angular/core";
import { KPIV1Model } from "@component/kpi-v1/kpi-v1.component";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  kpiData: KPIV1Model[] = [];
  chartData: any;

  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.kpiData.push({
        title: "Overall Expenses",
        value: "$ 56,000",
        text: "added today",
        textValue: "$ 100",
      });
      this.kpiData.push({
        title: "Waiting for Approval",
        value: "$ 56,000",
        text: "raised/submitted today",
        textValue: "$ 100",
      });
      this.kpiData.push({
        title: "Approved Expenses",
        value: "$ 56,000",
        text: "approved today",
        textValue: "$ 100",
      });
      this.kpiData.push({
        title: "Reimbursed Expenses",
        value: "$ 56,000",
        text: "reimbursed today",
        textValue: "$ 100",
      });

      // chart data
      this.chartData = {
        title: "Expense Trend",
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ],
        datasets: [
          {
            type: "line",
            label: "Overall Expenses",
            borderColor: "#42A5F5",
            borderWidth: 2,
            fill: false,
            tension: 0.4,
            data: [50, 25, 12, 48, 56, 76, 42, 67, 34, 56, 90, 34, 67],
          },
          {
            type: "bar",
            label: "Waiting for Approval",
            backgroundColor: "#66BB6A",
            data: [21, 84, 24, 75, 37, 65, 34, 78, 23, 56, 89, 23, 45],
            // borderColor: "white",
            // borderWidth: 2,
          },
          {
            type: "bar",
            label: "Approved Expenses",
            backgroundColor: "#FFA726",
            data: [41, 52, 24, 74, 23, 21, 32, 88, 34, 12, 90, 35, 11],
          },
          {
            type: "bar",
            label: "Reimbursed Expenses",
            backgroundColor: "#2196f3",
            data: [41, 52, 24, 74, 23, 21, 32, 45, 23, 12, 45, 67, 89],
          },
        ],
      };
    }, 5);
  }
}
