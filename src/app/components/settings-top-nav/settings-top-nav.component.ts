import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings-top-nav',
  templateUrl: './settings-top-nav.component.html',
  styleUrls: ['./settings-top-nav.component.scss']
})
export class SettingsTopNavComponent implements OnInit {
showBasic:boolean =false;
showPreference:boolean =false;
showTravel:boolean =false;
  constructor() { }

  ngOnInit(): void {
  }

  showBasics(){
    this.showBasic=true;
  }
  showPreferences(){
   this.showPreference=true;
   this.showBasic=false;
  }
  showTravels(){
    this.showTravel=true;
    this.showBasic=false;
  }

}
