import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { NavigationService } from "@service/navigation.service";
import {TooltipModule} from 'primeng/tooltip';

@Component({
  selector: "app-side-nav",
  templateUrl: "./side-nav.component.html",
  styleUrls: ["./side-nav.component.scss"],
})
export class SideNavComponent implements OnInit {
  showDelay: number= 0;
  currentNav: string = "home";
  constructor(
    private router: Router,
    private navigationService: NavigationService
  ) {}  

  ngOnInit(): void {
    this.currentNav = this.router.url.substring(1, this.router.url.length);

    this.navigationService.getCurrentNav().subscribe({
      next: (tab: any) => (this.currentNav = tab),
    });
  }

  routeTo(route: string) {
    // this.eventService.menuEventHandler(route);
    // setting current navigation
    this.router.navigateByUrl(route);
    this.navigationService.setCurrentNav(route);
  }
}
