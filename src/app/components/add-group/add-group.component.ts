import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators , AbstractControl} from '@angular/forms';
import { ENDPOINTS } from '@core/urls.util';
import { CommonService } from '@service/common.service';

@Component({
  selector: 'app-add-group',
  templateUrl: './add-group.component.html',
  styleUrls: ['./add-group.component.scss']
})
export class AddGroupComponent implements OnInit {
  @Input() departmentId:number=0;
  @Output() closeDialog: EventEmitter<any> = new EventEmitter();
  addGroup!: FormGroup;
  addAdvance: any;

  constructor(private formBuilder: FormBuilder, private service: CommonService) { }

  ngOnInit(): void {
    this.addGroup = new FormGroup({
      departmentName: new FormControl('', Validators.required),
      departmentDescription: new FormControl('', Validators.required)
    })
  }
  onSubmit() {
    this.closeDialog.emit(true);
  }
  saveGroup() {
    console.log(this.addGroup.getRawValue());
    this.service.postData(ENDPOINTS.SAVEGROUP, this.addGroup.getRawValue()).subscribe({
      next: (data: any) => {
        console.log(data);
        alert("Group Added successfully");
      }
    })
  }
  UpdateGroup() {
    console.log(this.addGroup.getRawValue());
    this.service.updateUserData(ENDPOINTS.UPDATEGROUP, this.addGroup.getRawValue()).subscribe({
      next: (data: any) => {
        console.log(data);
        alert("Group Updated successfully");
      }
    })
  }

  onReset() {
    this.addAdvance.reset();
  }
}
