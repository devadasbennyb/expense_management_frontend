import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators, } from "@angular/forms";
import { CommonService } from "@service/common.service";
import { ENDPOINTS } from "@core/urls.util";



@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {
  @Input() empId: number = 0;
  @Output() closeDialog: EventEmitter<any> = new EventEmitter();
  addEmployee!: FormGroup;
  departmentModel!: FormGroup;
  managerModel!: FormGroup;
  isSubmitted: boolean = false;
  save: boolean = true;
  update: boolean = false;
  constructor(private formBuilder: FormBuilder, private service: CommonService) { }
  ngOnInit(): void {
    this.addEmployee = new FormGroup({
      empId: new FormControl('', Validators.required),
      departmentModel: new FormGroup({
        departmentId: new FormControl('', Validators.required)
      }),
      managerModel: new FormGroup({
        managerId: new FormControl('', Validators.required)
      }),
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      emailId: new FormControl('', Validators.required),
      mobile: new FormControl('', Validators.required),
      accountNumber: new FormControl('', Validators.required),
      creditCard: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required),
      zip: new FormControl('', Validators.required),
    });

  }
  ngOnChanges() {
    if (this.empId) {
      this.service.getCurrentData(ENDPOINTS.FETCHCURRENTEMPLOYEE, this.empId).subscribe((response: any) => {
        console.log(response.results);
        console.log(this.empId)
        this.addEmployee.patchValue(response.results);
      })
    }
  }

  get f(): { [key: string]: AbstractControl } {
    return this.addEmployee.controls;
  }

  saveUser() {
    console.log(this.addEmployee.getRawValue());
    this.service.postData(ENDPOINTS.SAVEEMPLOYEE, this.addEmployee.getRawValue()).subscribe({
      next: (data) => {
        console.log(data);
        alert("User Added successfully");
      }
    });
  }
  UpdateUser() {
    console.log(this.addEmployee.getRawValue());
    this.service.updateUserData(ENDPOINTS.UPDATEEMPLOYEE, this.addEmployee.getRawValue()).subscribe({
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
    this.addEmployee.reset();
  }
}
