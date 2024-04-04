import { Component, Input, OnInit } from "@angular/core";
import { ChartConfig, ChartConfigService } from "@service/chart-config.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-grouped-vertical-bar-and-line-combo-chart",
  templateUrl: "./grouped-vertical-bar-and-line-combo-chart.component.html",
  styleUrls: ["./grouped-vertical-bar-and-line-combo-chart.component.scss"],
})
export class GroupedVerticalBarAndLineComboChartComponent implements OnInit {
  @Input() input!: any;

  chartOptions: any;
  subscription!: Subscription;
  config!: ChartConfig;
  dropDownOptions!: string[];
  selectedOption!: string;

  constructor(private configService: ChartConfigService) {}

  ngOnInit() {
    this.dropDownOptions = ["2020-21", "2021-22"];

    this.chartOptions = {
      plugins: {
        legend: {
          labels: {
            color: "#495057",
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: "#495057",
          },
          grid: {
            color: "#ebedef",
          },
        },
        y: {
          ticks: {
            color: "#495057",
          },
          grid: {
            color: "#ebedef",
          },
        },
      },
    };

    this.config = this.configService.config;
    this.updateChartOptions();
    this.subscription = this.configService.configUpdate$.subscribe(
      (config: any) => {
        this.config = config;
        this.updateChartOptions();
      }
    );
  }

  updateChartOptions() {
    if (this.config.dark) this.applyDarkTheme();
    else this.applyLightTheme();
  }

  applyLightTheme() {
    this.chartOptions = {
      plugins: {
        legend: {
          labels: {
            color: "#495057",
          },
          position: "bottom",
        },
      },
      scales: {
        x: {
          ticks: {
            color: "#495057",
          },
          grid: {
            display: false,
            color: "#ebedef",
          },
        },
        y: {
          display: false,
          ticks: {
            color: "#495057",
          },
          grid: {
            color: "#ebedef",
          },
        },
      },
    };
  }

  applyDarkTheme() {
    this.chartOptions = {
      plugins: {
        legend: {
          labels: {
            color: "#ebedef",
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: "#ebedef",
          },
          grid: {
            color: "rgba(255,255,255,0.2)",
          },
        },
        y: {
          ticks: {
            color: "#ebedef",
          },
          grid: {
            color: "rgba(255,255,255,0.2)",
          },
        },
      },
    };
  }
}
