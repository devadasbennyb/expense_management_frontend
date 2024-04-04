import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ENDPOINTS } from '@core/urls.util';
import { CommonService } from '@service/common.service';
import { AddGroupComponent } from '@component/add-group/add-group.component';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit {
  groupsData: any[] = [];
  isAddGroupDialog: boolean = false;
  departmentId: number = 0;

  constructor(private service: CommonService) { }

  ngOnInit(): void {
    this.getAllGroups();
  }
  getAllGroups(): void {
    this.service.getRecords(ENDPOINTS.FETCHALLGROUPS).subscribe((data: any) => {
      console.log(data.results);
      if (data.results) {
        for (let key of Object.keys(data.results)) {
          this.groupsData.push(data.results[key]);
        }
        console.log(this.groupsData);
      }
    });
  }
  editGroup(departmentId: number) {
    this.isAddGroupDialog = true;
    this.departmentId = departmentId
    console.log(this.departmentId)
  }

  deleteGroup(data: any) {
    console.log(this.groupsData)
    this.service.deleteUserData(ENDPOINTS.DELETEGROUP, data.departmentId).subscribe({
      next: (value) => {
        alert("Group deleted successfully");
      }
    });
  }

  closeDialoge(event: any) {
    this.isAddGroupDialog = false;
  }
}
