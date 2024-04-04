import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ENDPOINTS } from "@core/urls.util";
import { CommonService } from "@service/common.service";

@Component({
  selector: "app-trip",
  templateUrl: "./trip.component.html",
  styleUrls: ["./trip.component.scss"],
})
export class TripComponent implements OnInit {
  tripData: any[] = [];
  addTrip!: FormGroup;
  isAddTripDialog: boolean = false;
  tripId:number=0;

  constructor(private service: CommonService) { }

  ngOnInit(): void {
    this.getAllTrips();
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
  closeDialoge(event: any) {
    this.isAddTripDialog = false;
  }  
  getAllTrips(): void {
    this.service.getRecords(ENDPOINTS.FETCHTRIPS).subscribe((data: any) => {
      console.log(data.results);
      if (data.results) {
        for (let key of Object.keys(data.results)) {
          this.tripData.push(data.results[key]);
        }
        console.log(this.tripData);
      }
    });
  }
  editTrip(tripId:number):void {
    this.isAddTripDialog=true;
    this.tripId=tripId;
  }
  deleteTrip(data: any) {
    console.log(this.tripData)
    this.service.deleteUserData(ENDPOINTS.DELETETRIP, data.tripId).subscribe({
      next: (value) => {
        alert("Advance deleted successfully");
      }
    });
  }
}
