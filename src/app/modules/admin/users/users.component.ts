import { Component, OnInit } from "@angular/core";
import { ENDPOINTS } from "@core/urls.util";
import { EmployeeModel } from "@model/EmployeeModel";
import { UserModel } from "@model/UserModel";
import { CommonService } from "@service/common.service";


@Component({
  
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.scss"],
})
export class UsersComponent implements OnInit {
  employee!: EmployeeModel[];
  isAddUserDialog=false;
  empId:number=0;

  constructor(private service: CommonService) {}

  ngOnInit(): void {  
      this.service.getRecords(ENDPOINTS.FETCHALLEMPLOYEE).subscribe({
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
  closeDialoge(event: any) {
    this.isAddUserDialog = false;
  }
 editUser(userId:number):void {
  console.log(this.employee);
  this.isAddUserDialog=true;
  this.empId=userId;
 }
 
  deleteUser(userId:number): void {
    console.log(this.empId)
    this.service.deleteUserData(ENDPOINTS.DELETEUSER, userId).subscribe({
      next: (value) => {
        alert("User deleted successfully");
      }
    });
  }
}