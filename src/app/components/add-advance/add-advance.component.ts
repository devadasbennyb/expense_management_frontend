import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators, } from "@angular/forms";
import { ENDPOINTS } from "@core/urls.util";
import { CommonService } from "@service/common.service";


@Component({
  selector: "app-add-advance",
  templateUrl: "./add-advance.component.html",
  styleUrls: ["./add-advance.component.scss"],
})
export class AddAdvanceComponent implements OnInit {
  @Input() advanceId: number = 0;
  @Output() closeDialog: EventEmitter<any> = new EventEmitter();
  addAdvance!: FormGroup;
  isSubmitted: boolean = false;

  constructor(private formBuilder: FormBuilder, private service: CommonService) { }

  ngOnInit(): void {
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

  ngOnChanges(){
    if(this.advanceId){
      this.service.getCurrentData(ENDPOINTS.FETCHCURRENTADVANCES, this.advanceId).subscribe((response: any) => {
        console.log(response.results);
        this.addAdvance.patchValue(response.results) ;
      })
    }
  }
  saveAdvance() {
    console.log(this.addAdvance.getRawValue());
    this.service.postData(ENDPOINTS.SAVEADVANCE, this.addAdvance.getRawValue()).subscribe({
      next: (data: any) => {
        console.log(data);
        alert("Advance Added successfully");
      }
    })
  }
  UpdateAdvance() {
    console.log(this.addAdvance.getRawValue());
    this.service.updateUserData(ENDPOINTS.UPDATEADVANCE, this.addAdvance.getRawValue()).subscribe({
      next: (data: any) => {
        console.log(data);
        alert("Advance Updated successfully");
      }
    })
  }
 
  get f(): { [key: string]: AbstractControl } {
    return this.addAdvance.controls;
  }

  onSubmit() {
    this.closeDialog.emit(true);
  }

  onReset() {
    this.addAdvance.reset();
  }
}
