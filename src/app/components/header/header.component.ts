import {Component} from '@angular/core';
import {Router, Event, NavigationStart, NavigationEnd, NavigationError} from '@angular/router';
import { environment } from "../../../environments/environment";
import { isLogged } from "../../GlobalVariables";
import {AppComponent} from "../../app.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  currentRoute: string;
  isLogged: boolean = false;

  constructor(private router: Router) {
    this.currentRoute = "/";
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {

      }

      if (event instanceof NavigationEnd) {
        AppComponent.WaitForUpdateUser(async () => {
            this.isLogged = isLogged;
            this.currentRoute = event.url;
        });
      }

      if (event instanceof NavigationError) {
        console.log(event.error);
      }
    });
  }
}
