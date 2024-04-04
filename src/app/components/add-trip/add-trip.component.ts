import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators, } from "@angular/forms";
import { ENDPOINTS } from "@core/urls.util";
import { CommonService } from "@service/common.service";

@Component({
  selector: "app-add-trip",
  templateUrl: "./add-trip.component.html",
  styleUrls: ["./add-trip.component.scss"],
})
export class AddTripComponent implements OnInit {
  @Input() tripId:number=0;
  @Output() closeDialog: EventEmitter<any> = new EventEmitter();
  addTrip!: FormGroup;
  isSubmitted: boolean = false;
  save:boolean=true;
  update:boolean=false;

  constructor(private formBuilder: FormBuilder, private service: CommonService) { }

  ngOnInit(): void {
    this.addTrip = new FormGroup({
      tripId: new FormControl('', Validators.required),  
      date: new FormControl('', Validators.required),
      employeeModel: new FormGroup({
        empId: new FormControl('', Validators.required),
      }),
      tripName: new FormControl('', Validators.required),
      startDate: new FormControl('', Validators.required),
      endDate: new FormControl('', Validators.required),
      status: new FormControl('', Validators.required),
      fromLocation: new FormControl('', Validators.required),
      toLocation: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required)
    })
  }
  ngOnChanges(){
    if(this.tripId){
   this.save=false;
   this.update=true;
    this.service.getCurrentData(ENDPOINTS.FETCHCURRENTTRIP,this.tripId).subscribe((response:any) => {
      console.log(response.results);
      this.addTrip.patchValue(response.results);
    }
    )}
  }
  saveTrip() {
    console.log(this.addTrip.getRawValue());
    this.service.postData(ENDPOINTS.SAVETRIP, this.addTrip.getRawValue()).subscribe({
      next: (data: any) => {
        console.log(data);
        alert("Trip Added successfully");
      }
    })
  }
  UpdateTrip() {
    console.log(this.addTrip.getRawValue());
    this.service.updateUserData(ENDPOINTS.UPDATETRIP, this.addTrip.getRawValue()).subscribe({
      next: (data: any) => {
        console.log(data);
        alert("Trip Updated successfully");
      }
    })
  }
  get f(): { [key: string]: AbstractControl } {
    return this.addTrip.controls;
  }

  onSubmit() {
    this.closeDialog.emit(true);
  }

  onReset() {
    this.addTrip.reset();
  }
}
