import { Component } from '@angular/core';
import {Event, NavigationEnd, NavigationError, NavigationStart, Router} from "@angular/router";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  currentRoute: string;
  acceptedRoutes: string[] = ['/', '/#SWEP_Selectors'];

  constructor(private router: Router) {
    this.currentRoute = "/";
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {

      }

      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
      }

      if (event instanceof NavigationError) {
        console.log(event.error);
      }
    });
  }
}
