import {Component} from '@angular/core';
import {EducatablePeoples, StudyLinks} from "../../GlobalVariables";
import {Router} from "@angular/router";
import {PopupSystemComponent} from "../popup-system/popup-system.component";

@Component({
  selector: 'app-teacher-form',
  templateUrl: './teacher-form.component.html',
  styleUrls: ['./teacher-form.component.scss']
})
export class TeacherFormComponent {

  public static Instance: TeacherFormComponent;

  selectedEducatedPeoples: EducatablePeoples[] = [];

  selectedEducatedPeoplesChange(): void {
    const result: EducatablePeoples[] = [];
    document.getElementsByName("canEducatePeoples")
      .forEach((input: any | HTMLInputElement) => {
        if (input.checked) {
          result.push(input.value);
        }
      });
    this.selectedEducatedPeoples = result;
  }

  openForm() {
    document.querySelector(`.popUpteacher`)?.classList.add('active');
    document.querySelector(`.popup-bg`)?.classList.add('active');
  }

  closeForm() {
    document.querySelector(`.popUpteacher`)?.classList.remove('active');
    document.querySelector(`.popup-bg`)?.classList.remove('active');
  }

  async trySendForm(): Promise<void> {
    const form = new FormData(document.forms.namedItem("teacher-form") || new HTMLFormElement());
    const formObj: any = {};
    form.forEach((value, key) => {
      if (formObj[key] !== undefined && typeof formObj[key] === 'object') {
        formObj[key].push(value);
      } else if (formObj[key] !== undefined) {
        formObj[key] = [formObj[key], value];
      } else {
        formObj[key] = value;
      }
    });

    const response = await fetch('/api/teacher_send_form', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      mode: 'cors',
      body: JSON.stringify(formObj)
    });
    const result = await response.json();
    if (result.result === true) {
      PopupSystemComponent.SendMessage("Форма успешно отправлена!");
      return this.closeForm();
    } else {
      PopupSystemComponent.SendMessage(result.error);
      return;
    }
  }

  constructor(private router: Router) {
    TeacherFormComponent.Instance = this;
  }

  protected readonly EducatablePeoples = EducatablePeoples;
  protected readonly StudyLinks = StudyLinks;
}
