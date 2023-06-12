import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { IUserSchema, userInfo } from "../../GlobalVariables";
import { AppComponent } from "../../app.component";
import { TeacherFormComponent } from "../../components/teacher-form/teacher-form.component";

@Component({
  selector: 'app-account-profile',
  templateUrl: './account-profile.component.html',
  styleUrls: ['./account-profile.component.scss']
})
export class AccountProfileComponent {
  user: IUserSchema;
  accountType: string = '';

  async logout() {
    fetch('/api/logout?_method=DELETE', {
      method: 'POST'
    })
      .then(async response => {
        const result = await response.json();
        if (result.result === true) {
          await this.router.navigateByUrl('/');
        }
      });
  }

  constructor(private router: Router) {
    this.user = userInfo;

    const cb = async () => {
      this.user = userInfo;

      switch (this.user?.accountType) {
        case null:
          this.accountType = 'Не авторизован';
          break;

        case 0:
          this.accountType = 'Пользователь';
          break;

        case 1:
          this.accountType = 'Репетитор';
          break;

        case 2:
          this.accountType = 'Модератор';
          break;

        case 3:
          this.accountType = 'Админ';
          break;
      }

      // @ts-ignore
      this.user.created = new Date(Date.parse(this.user.created)).toLocaleDateString("ru-RU");
    }

    AppComponent.WaitForUpdateUser(cb);
  }

  protected readonly TeacherFormComponent = TeacherFormComponent;
}
