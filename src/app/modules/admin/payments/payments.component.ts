import { Component, OnInit } from '@angular/core';
import { MenuItem } from "primeng/api";

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss']
})

export class PaymentsComponent implements OnInit {

  methods!: MenuItem[];
  bankTransferDialog:boolean=false;
  constructor() { }

  ngOnInit(): void {

    this.methods = [
      { label: "credit card", icon: "fa-solid fa-money-check-pen", routerLink: ["creditcard"]  }, 
      { label: "Bank transfer", icon: "fa-solid fa-money-check-dollar", routerLink:['banktransfer'] },
    ]
  }
  closeDialog(event: any) {
    this.bankTransferDialog = false;
  }

}
