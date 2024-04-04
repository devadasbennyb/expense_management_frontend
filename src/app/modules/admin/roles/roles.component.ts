import { Component, OnInit } from '@angular/core';
import { ENDPOINTS } from '@core/urls.util';
import { EmployeeModel } from '@model/EmployeeModel';
import { CommonService } from '@service/common.service';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent implements OnInit {
  employee!: EmployeeModel[];
  addEmployee: any;
  empId: number = 1;
  isAddRoleDialog: boolean = false;

  constructor(private service: CommonService) { }

  ngOnInit(): void {
    this.service.getRecords(ENDPOINTS.FETCHALLUSERS).subscribe({
      // this.service.getRecords(ENDPOINTS.FETCHALLEMPLOYEE).subscribe({
      next: (r) => {
        console.log(r);
        if (!r.hasError && r.results.length > 0) {
          this.employee = r.results;
        }
      },
      error: (e) => {
        console.error(e);
      },
      complete: () => console.info("complete"),
    });
  }

  UpdateRole() {
    this.service.getCurrentData(ENDPOINTS.FETCHCURRENTEMPLOYEE, this.empId).subscribe({
      next: (data: any) => {
        console.log(data);
      }
    })
    this.isAddRoleDialog = true;

  }
  closeDialog() {

  }

  DeleteRole() {
    alert("Deleting")
  }

}
