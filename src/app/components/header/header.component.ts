import {Component} from '@angular/core';
import {Router, Event, NavigationStart, NavigationEnd, NavigationError} from '@angular/router';
import { environment } from "../../../environments/environment";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  currentRoute: string;
  isLogged: boolean = false;

  constructor(private router: Router) {

    fetch(`${environment.apiUrl}/is_authenticated`)
      .then((response) => {
        response.json().then(result => this.isLogged = result.result === 'true' || result.result === true)
      })
      .catch((e) => {
        console.error(e);
      })
      .finally(() => {
        console.log('раз-раз!')
      });

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
