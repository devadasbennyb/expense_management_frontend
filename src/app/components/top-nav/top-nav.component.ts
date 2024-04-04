import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { Router } from "@angular/router";
import { Location } from '@angular/common';
import { AuthService } from "@service/auth.service";
@Component({
  selector: "app-top-nav",
  templateUrl: "./top-nav.component.html",
  styleUrls: ["./top-nav.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class TopNavComponent implements OnInit {
  isAddExpenseDialog: boolean = false;
  isAddTripDialog: boolean = false;
  isAddReportDialog:boolean=false;
  isAddAdvanceDialog:boolean=false;
  isAddEmployeeDialog:boolean=false;
  isAddRoleDialog:boolean=false;
  isAddGroupDialog:boolean=false;

  compName: any;
  route !: string;
  constructor(location: Location, private router: Router, private services:AuthService) {
    router.events.subscribe((val) => {
      if (location.path() != '') {
        this.route = location.path();
      } else {
        this.route = 'Home'
      }
    });
  }
  ngOnInit(): void {
  }
  showModalDialog() {
    if (this.route == "/expense") {
      this.isAddExpenseDialog = true;
    }
    else  if (this.route == "/trip") {
      this.isAddTripDialog = true;
    }
    else if (this.route =="/reports") {
      this.isAddReportDialog=true;
    }
    else if (this.route =="/advances") {
      this.isAddAdvanceDialog=true;
    }
    else if (this.route == "/admin/users") {
      this.isAddEmployeeDialog=true;
    }
    else if (this.route=="/admin/roles") {
      this.isAddRoleDialog=true;
    }
    else if (this.route=="/admin/groups") {
      this.isAddGroupDialog=true;
    }
 
  }
  closeDialog(event: any) {
    this.isAddExpenseDialog = false;
    this.isAddTripDialog = false;
    this.isAddReportDialog=false;
    this.isAddAdvanceDialog=false;
    this.isAddEmployeeDialog=false;
  }

  themeModel(){
    
  }
}