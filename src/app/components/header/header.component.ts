import {Component} from '@angular/core';
import {Router, Event, NavigationStart, NavigationEnd, NavigationError} from '@angular/router';
import { environment } from "../../../environments/environment";
import {isLogged, IStudyLinksElem, StudyLinks} from "../../global-variables";
import {AppComponent} from "../../app.component";
import {HomeComponent} from "../../pages/home/home.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  currentRoute: string;
  isLogged: boolean = false;

  searchList: IStudyLinksElem[] = [];

  searchInput(event: any): void {
    const str: string = event.target.value;
    this.searchList = StudyLinks
      .filter(item => {
        return str !== '' && item.studyWay.search(str) !== -1;
      });

    console.log(this.searchList)
  }

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

  protected readonly HomeComponent = HomeComponent;
}
