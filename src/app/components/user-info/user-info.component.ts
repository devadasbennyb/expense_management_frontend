import { animate, state, style, transition, trigger, } from "@angular/animations";
import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AuthService } from "@service/auth.service";
import { NavigationService } from "@service/navigation.service";
import { MenuItem } from "primeng/api";

export interface UserInfoModel {
  id: number;
  email: string;
  username: string;
  fullName: string;
  firstName?: string;
  lastName?: string;
  company: string;
  role: string;
  imageUrl:string;
}

@Component({
  selector: "app-user-info",
  templateUrl: "./user-info.component.html",
  styleUrls: ["./user-info.component.scss"],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger("visibilityChanged", [
      state("true", style({ opacity: 1, transform: "scale(1.0)" })),
      state("false", style({ opacity: 0, transform: "scale(0.0)" })),
      transition("1 => 0", animate("200ms")),
      transition("0 => 1", animate("200ms")),
    ]),
  ],
})
export class UserInfoComponent implements OnInit {
  isVisible: boolean = true;
  userInfo!: UserInfoModel;
  menuItems!: MenuItem[];
  profileDialog: boolean = false;
  constructor(private authService: AuthService, private Router: RouterModule,
    private navigationService: NavigationService) { }

  ngOnInit(): void {
    this.getUserData();
    // this.userInfo = {
    //   fullName: "Okta Team",
    //   company: "Tecnics Integrations",
    //   id: 1,
    //   username: "oktateam",
    //   firstName: "Okta",
    //   lastName: "Team",
    // };

    this.menuItems = [
      {
        label: "Profile",
        icon: "fa-duotone pi-fw fa-user",
        routerLink: "settings"
      },
      {
        label: "Sign Out",
        icon: "fa-duotone pi-fw fa-power-off",
        command: () => {
          this.authService.logout();
        },
      },
    ];
  }


  getUserData() {
    this.userInfo = JSON.parse(localStorage.getItem("EXP_USER")!)
    //  console.log(user)
  }
  showModalDialog() {
    this.profileDialog = true;
    alert("hi")
  }
  closeDialog(event: any) {
    this.profileDialog = false;
  }
}
