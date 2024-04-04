import { Injectable } from "@angular/core";
import { NavigationStart, Router } from "@angular/router";
import { Observable, Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class NavigationService {
  private currentNav = new Subject<string>();
  private keepAfterRouteChange = true;

  constructor(private router: Router) {
    // clear currentnav  on route change unless 'keepAfterRouteChange' flag is true
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        if (this.keepAfterRouteChange) {
          // only keep for a single route change
          this.keepAfterRouteChange = false;
        } else {
          // clear currentnav
          this.clear();
        }
      }
    });
  }

  getCurrentNav(): Observable<string> {
    return this.currentNav.asObservable();
  }

  setCurrentNav(nav: string, keepAfterRouteChange = true) {
    this.keepAfterRouteChange = keepAfterRouteChange;
    this.currentNav.next(nav);
  }

  // success(message: string, keepAfterRouteChange = false) {
  //   this.keepAfterRouteChange = keepAfterRouteChange;
  //   this.currentNav.next({ type: "success", text: message });
  // }

  // error(message: string, keepAfterRouteChange = false) {
  //   this.keepAfterRouteChange = keepAfterRouteChange;
  //   this.currentNav.next({ type: "error", text: message });
  // }

  clear() {
    // clear by calling subject.next() without parameters
    // this.currentNav.next();
    this.currentNav.complete();
  }
}
