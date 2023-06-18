import {Component, Input, OnInit} from '@angular/core';
import {
  EducatablePeoples,
  StudyLinks,
  StudyWayAndEducatablePeoplesIsCompatibility,
  StudyWays
} from "../../global-variables";
import {ITeacher} from "../../components/teacher-card/teacher-card.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @Input('ngModel') selectedEducatablePeoples: EducatablePeoples = EducatablePeoples.Школьники_5_9;
  @Input('ngModel') selectedStudyWay: StudyWays = StudyWays.Алгебра;

  allTeachers: ITeacher[] = []

  getSWByKey(key: string): StudyWays {
    return StudyWays[key as keyof typeof StudyWays];
  }

  getEPByValue(key: string): EducatablePeoples {
    const indexOfS = Object.values(EducatablePeoples).indexOf(key as unknown as EducatablePeoples);
    key = Object.keys(EducatablePeoples)[indexOfS];
    return EducatablePeoples[key as keyof typeof EducatablePeoples];
  }

  selectEPChanged(newValue: EducatablePeoples) {
    let firstAvailableSW: StudyWays | null = null;
    let newValueIsCompability: boolean = false;

    StudyLinks.forEach(item => {
      if (item.availablePeoples.includes(newValue) && firstAvailableSW === null) {
        firstAvailableSW = item.studyWay;
      }

      if (this.selectedStudyWay === item.studyWay && item.availablePeoples.includes(newValue)) {
        newValueIsCompability = true;
        return;
      }
    });

    if (!newValueIsCompability && firstAvailableSW) {
      this.selectedStudyWay = firstAvailableSW;
    }
  }

  public static ChangeSWAndEP(sw: StudyWays, ep: number): void {
    HomeComponent.Instance.selectedStudyWay = sw;
    switch (ep) {
      case 0:
        HomeComponent.Instance.selectedEducatablePeoples = EducatablePeoples.Дошкольники;
        break;

      case 1:
        HomeComponent.Instance.selectedEducatablePeoples = EducatablePeoples.Школьники_5_9;
        break;

      case 2:
        HomeComponent.Instance.selectedEducatablePeoples = EducatablePeoples.Студенты;
        break;
    }
    HomeComponent.Instance.selectEPChanged(HomeComponent.Instance.selectedEducatablePeoples);
  }

  static Instance: HomeComponent;
  constructor() {
    HomeComponent.Instance = this;
  }

  async ngOnInit() {
    const response = await fetch('/api/get_teachers');
    this.allTeachers = await response.json();
  }

  protected readonly StudyLinks = StudyLinks;
  protected readonly EducatablePeoples = EducatablePeoples;
  protected readonly StudyWays = StudyWays;
  protected readonly StudyWayAndEducatablePeoplesIsCompatibility = StudyWayAndEducatablePeoplesIsCompatibility;
}


