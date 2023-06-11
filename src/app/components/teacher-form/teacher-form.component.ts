import { Component } from '@angular/core';
import { EducatablePeoples, StudyLinks } from "../../GlobalVariables";

@Component({
  selector: 'app-teacher-form',
  templateUrl: './teacher-form.component.html',
  styleUrls: ['./teacher-form.component.scss']
})
export class TeacherFormComponent {

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
      console.log(result);
    }

    protected readonly EducatablePeoples = EducatablePeoples;
    protected readonly StudyLinks = StudyLinks;
}
