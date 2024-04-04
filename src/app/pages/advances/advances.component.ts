import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators, AbstractControl } from "@angular/forms";
import { ENDPOINTS } from "@core/urls.util";
import { CommonService } from "@service/common.service";

import { Router } from "@angular/router";
@Component({
  selector: "app-advances",
  templateUrl: "./advances.component.html",
  styleUrls: ["./advances.component.scss"],
})
export class AdvancesComponent implements OnInit {
  @Input() input!: any;
  @Output() closeDialog: EventEmitter<any> = new EventEmitter();
  advancesData: any[] = [];
  // advancesDataObj: AdvancesDetails = new AdvancesDetailsIml();
  addAdvance!: FormGroup;
  isSubmitted: boolean = false;
  isAddAdvanceDialog: boolean = false;
  advancesDetails: any;
  advanceId: number = 0;

  constructor(private formBuilder: FormBuilder, private service: CommonService, private router: Router) { }

  ngOnInit(): void {
    this.getAllAdvances();
    this.addAdvance = new FormGroup({
      date: new FormControl('', Validators.required),
      employeeModel: new FormGroup({
        empId: new FormControl('', Validators.required),
      }),
      advanceName: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      status: new FormControl('', Validators.required),
      amount: new FormControl('', Validators.required),
      advanceId: new FormControl('', Validators.required),
    })
  }
  closeDialoge(event: any) {
    this.isAddAdvanceDialog = false;
  }
  getAllAdvances(): void {
    this.service.getRecords(ENDPOINTS.FETCHADVANCES).subscribe((data: any) => {
      console.log(data.results);
      if (data.results) {
        for (let key of Object.keys(data.results)) {
          this.advancesData.push(data.results[key]);
        }
      }
    });
  }
  editAdvance(advanceId: number) {
    this.isAddAdvanceDialog = true;
    this.advanceId =advanceId
  }
  // editAdvance(data: any) {
  //   this.service.getCurrentData(ENDPOINTS.FETCHCURRENTADVANCES, data.advanceId).subscribe((info: any) => {
  //     console.log(info.results);
  //     this.addAdvance = new FormGroup({
  //       date: new FormControl(info.results['date']),
  //       employeeModel: new FormGroup({
  //         empId: new FormControl(info.results['empId']),
  //       }),
  //       advanceName: new FormControl(info.results['advanceName']),
  //       description: new FormControl(info.results['description']),
  //       status: new FormControl(info.results['status']),
  //       amount: new FormControl(info.results['amount']),
  //       advanceId: new FormControl(info.results['advanceId']),
  //     })
  //   })
  // }
  
  UpdateAdvance() {
    console.log(this.addAdvance.getRawValue());
    this.service.updateUserData(ENDPOINTS.UPDATEADVANCE, this.addAdvance.getRawValue()).subscribe({
      next: (data: any) => {
        console.log(data);
        alert("Advance Updated successfully");
      }
    })
  }
  onReset() {
    this.addAdvance.reset();
  }
  onSubmit() {
    this.closeDialog.emit(true);
  }
  get f(): { [key: string]: AbstractControl } {
    return this.addAdvance.controls;
  }
  deleteAdvance(data: any) {
    console.log(this.advancesData)
    this.service.deleteUserData(ENDPOINTS.DELETEADVANCE, data.advanceId).subscribe({
      next: (value) => {
        alert("Advance deleted successfully");
      }
    });
  }
}