import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ENDPOINTS } from "@core/urls.util";

import { CommonService } from "@service/common.service";

@Component({
  selector: "app-reports",
  templateUrl: "./reports.component.html",
  styleUrls: ["./reports.component.scss"],
})
export class ReportsComponent implements OnInit {
  reportsData: any[] = [];
  addReport!: FormGroup;
  isAddReportDialog: boolean = false;
  reportId:number=0;

  constructor(private service: CommonService) {}

  ngOnInit(): void {
    this.getAllReports();
    this.addReport = new FormGroup({
      reportId: new FormControl('',Validators.required),
      date: new FormControl('', Validators.required),
      employeeModel: new FormGroup({
        empId: new FormControl('', Validators.required),
      }),
      reportName: new FormControl('', Validators.required),
      duration: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      status: new FormControl('', Validators.required),
      total: new FormControl('', Validators.required)
    })
  }
  closeDialoge(event: any) {
    this.isAddReportDialog = false;
  }
  getAllReports(): void {
    this.service.getRecords(ENDPOINTS.FETCHREPORTS).subscribe((data: any) => {
      console.log(data.results);
      if (data.results) {
        for (let key of Object.keys(data.results)) {
          this.reportsData.push(data.results[key]);
        }
        console.log(this.reportsData);
      }
    });
  }
  editReport(reportId:any)
  {
    this.isAddReportDialog=true;
    this.reportId=reportId
  }
  deleteReport(data: any) {
    console.log(this.addReport)
    this.service.deleteUserData(ENDPOINTS.DELETEREPORT, data.reportId).subscribe({
      next: (value) => {
        alert("Report deleted successfully");
      }
    });
  }
}
