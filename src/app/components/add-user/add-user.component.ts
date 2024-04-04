import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators, } from "@angular/forms";
import { CommonService } from "@service/common.service";
import { ENDPOINTS } from "@core/urls.util";


@Component({
  selector: "app-add-user",
  templateUrl: "./add-user.component.html",
  styleUrls: ["./add-user.component.scss"],
})

export class AddUserComponent implements OnInit {
  @Input() userId: number = 0;
  @Output() closeDialog: EventEmitter<any> = new EventEmitter();
  addUser!: FormGroup;
  userProfile!: FormGroup;
  isSubmitted: boolean = false;
  save: boolean = true;
  update: boolean = false;

  constructor(private formBuilder: FormBuilder, private service: CommonService) { }

  ngOnInit(): void {
    // this.addUser = this.formBuilder.group({
    //   empId:new FormControl({value: this.empId}),
    //   firstName: new FormControl({value: this.firstName}),
    //   lastName: new FormControl({value: this.lastName}),
    //   emailId: new FormControl({ value: this.emailId }),
    //   departmentId: new FormControl({ value: this.departmentId }),
    //   mobile: new FormControl({ value: this.mobile }),
    //   accountNumber: new FormControl({ value: this.accountNumber }),
    //   creditCard: new FormControl({ value: this.creditCard}),
    //   state: new FormControl({ value: this.state }),
    //   address: new FormControl({ value: this.address }),
    //   zip: new FormControl({ value: this.zip }),
    // });
    this.addUser = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      userProfile: new FormGroup({
        email: new FormControl('', Validators.required),
        firstName: new FormControl('', Validators.required),
        lastName: new FormControl('', Validators.required),
        role: new FormControl('', Validators.required),
        imageUrl: new FormControl('', Validators.required),
      })
    })

  }
  ngOnChanges() {
    if (this.userId) {
      this.service.getCurrentData(ENDPOINTS.FETCHCURRENTUSER, this.userId).subscribe((response: any) => {
        console.log(response.results);
        console.log(this.userId)
        this.addUser.patchValue(response.results);
      })
    }
  }
  get f(): { [key: string]: AbstractControl } {
    return this.addUser.controls;
  }

  saveUser() {
    console.log(this.addUser.getRawValue());
    this.service.postData(ENDPOINTS.SAVEUSER, this.addUser.getRawValue()).subscribe({
      next: (data) => {
        console.log(data);
        alert("User Added successfully");
      }
    });
  }

  editUser(userId: number) {
    this.userId = userId
    console.log(userId)
    this.service.getRecords(ENDPOINTS.FETCHALLEMPLOYEE).subscribe((data: any) => {
      console.log(data.results);
    });
  }

  UpdateUser() {
    console.log(this.addUser.getRawValue());
    this.service.updateUserData(ENDPOINTS.UPDATEUSER, this.addUser.getRawValue()).subscribe({
      next: (data: any) => {
        console.log(data);
        alert("User Updated successfully");
      }
    })
  }
  onSubmit() {
    this.closeDialog.emit(true);
  }

  onReset() {
    this.addUser.reset();
  }
}
