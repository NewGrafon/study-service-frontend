import {Component, Input, OnInit} from '@angular/core';
import {EducatablePeoples, StudyWays} from "../../global-variables";

@Component({
  selector: 'app-teacher-card',
  templateUrl: './teacher-card.component.html',
  styleUrls: ['./teacher-card.component.scss']
})
export class TeacherCardComponent implements OnInit {

  @Input() teacher: ITeacher | null = null;
  backImg: string = '';

  async GetTeacherPicture(id: string): Promise<string> {
    let result = 'url("./assets/img/no-photo.png")';

    const response = await fetch('/api/get_account_picture_buffer/'+id);
    const _result = await response.json();

    if (_result.result) {
      result = `url("${_result.buffer}")`;
    }

    return result;
  }

  async ngOnInit(): Promise<void> {
    const interval = setInterval(async () => {
      if (this.teacher !== null) {
        this.backImg = await this.GetTeacherPicture(this.teacher._id);
        clearInterval(interval);
      }
    }, 100);
  }

  protected readonly TeacherCardComponent = TeacherCardComponent;
}

export interface ITeacher {
  _id: string,
  firstname: string,
  lastname: string
  teacherInfo: ITeacherInfo
}

export interface ITeacherInfo {
  education: string,
  educationPlace: string,
  workExperience: string,
  aboutMe: string,
  canEducatePeoples: EducatablePeoples[],
  studyWays: StudyWays[]
}
