import {Component, Pipe, PipeTransform} from '@angular/core';
import {Event, NavigationEnd, Router} from "@angular/router";
import {EducatablePeoples, schoolars, students, StudyLinks, underSchoolars} from "../../global-variables";
import {HomeComponent} from "../../pages/home/home.component";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  currentRoute: string;

  constructor(private router: Router) {
    this.currentRoute = "/";
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
      }
    });
  }

  protected readonly StudyLinks = StudyLinks;
  protected readonly EducatablePeoples = EducatablePeoples;
  protected readonly underSchoolars = underSchoolars;
  protected readonly schoolars = schoolars;
  protected readonly students = students;
  protected readonly HomeComponent = HomeComponent;
}

@Pipe({
  name: 'IncludesEducatablePeoples'
})
export class IncludesEducatablePeoples implements PipeTransform {
  transform(educatablePeoples: EducatablePeoples[], args: EducatablePeoples[] = [EducatablePeoples.Дошкольники]): boolean {
    let result: boolean = false;
    args.forEach((arg_people: EducatablePeoples) => {
      if (educatablePeoples.includes(arg_people))
        result = true;
        return;
    })

    return result;
  }
}
