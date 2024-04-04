import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators, } from "@angular/forms";
import { ENDPOINTS } from "@core/urls.util";
import { CommonService } from "@service/common.service";

@Component({
  selector: "app-add-report",
  templateUrl: "./add-report.component.html",
  styleUrls: ["./add-report.component.scss"],
})
export class AddReportComponent implements OnInit {
  @Input() reportId: number = 0;
  @Output() closeDialog: EventEmitter<any> = new EventEmitter();
  addReport!: FormGroup;
  isSubmitted: boolean = false;
  save:boolean=true;
  update:boolean=false;

  constructor(private formBuilder: FormBuilder, private service: CommonService) { }

  ngOnInit(): void {
    this.addReport = new FormGroup({
      reportId: new FormControl('', Validators.required),
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
  ngOnChanges() {
    if (this.reportId) {
      this.save=false;
      this.update=true;
      this.service.getCurrentData(ENDPOINTS.FETCHCURRENTREPORT, this.reportId).subscribe((response: any) => {
        console.log(response.results);
        this.addReport.patchValue(response.results);
      }
      )
    }
  }
  saveReport() {
    console.log(this.addReport.getRawValue());
    this.service.postData(ENDPOINTS.SAVEREPORT, this.addReport.getRawValue()).subscribe({
      next: (data: any) => {
        console.log(data);
        alert("Report Added successfully");
      }
    })
  }
  UpdateReport() {
    console.log(this.addReport.getRawValue());
    this.service.updateUserData(ENDPOINTS.UPDATEREPORT, this.addReport.getRawValue()).subscribe({
      next: (data: any) => {
        console.log(data);
        alert("Report Updated successfully");
      }
    })
  }
  get f(): { [key: string]: AbstractControl } {
    return this.addReport.controls;
  }

  onSubmit() {
    this.closeDialog.emit(true);
  }

  onReset() {
    this.addReport.reset();
  }
}
