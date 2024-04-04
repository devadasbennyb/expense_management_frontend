import { Component, OnInit } from "@angular/core";
import { AddUserComponent } from "@component/add-user/add-user.component";
import { MenuItem } from "primeng/api";

@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.scss"],
})

export class AdminComponent implements OnInit {
  items!: MenuItem[];
  constructor() {}

  ngOnInit(): void {
    this.items = [
      { label: "Users", icon: "fa-solid fa-user-large", routerLink: "users" },
      { label: "Groups", icon: "fa-solid fa-users", routerLink: "groups" },
      { label: "Roles", icon: "fa-brands fa-critical-role", routerLink:"roles" },
      { label: "Payments", icon: "fa-solid fa-credit-card", routerLink:"payments" },
      { label: "Rules", icon: "fa-solid fa-scale-balanced" , routerLink:"rules"},
      { label: "Integrations", icon: "fa-brands fa-adversal", routerLink: "integrations" },
    ];
  }
}
