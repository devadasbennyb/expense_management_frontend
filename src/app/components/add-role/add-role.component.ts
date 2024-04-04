import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ENDPOINTS } from '@core/urls.util';
import { EmployeeModel } from '@model/EmployeeModel';
import { CommonService } from '@service/common.service';
import { Role } from './add-role.model';

@Component({
  selector: 'app-add-role',
  templateUrl: './add-role.component.html',
  styleUrls: ['./add-role.component.scss']
})

export class AddRoleComponent implements OnInit {
  @Input() empId: number = 0;
  @Output() closeDialog: EventEmitter<any> = new EventEmitter();
  roles!: Role[];
  selectedRole!: Role;
  addUser!: FormGroup;

  constructor(private service: CommonService) {
  }

  ngOnInit(): void {
    this.addUser = new FormGroup({
      role: new FormControl('', Validators.required),
    })
  }

  UpdateRole() {
    console.log(this.addUser.getRawValue());
    if (this.empId) {
      this.service.updateUserData(ENDPOINTS.UPDATEEMPLOYEE, this.addUser.getRawValue()).subscribe({
        next: (data: any) => {
          console.log(data);
          alert("User Updated successfully");
        }
      })
    }
  }
  onSubmit() {
    this.closeDialog.emit(true);
  }
  role: Role[] = [

    { name: 'ADMIN'},
    { name: 'SUPERADMIN'},
    { name: 'USER' }
  ];
}
