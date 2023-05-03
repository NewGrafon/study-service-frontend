import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {userInfo} from "../../GlobalVariables";

@Component({
  selector: 'app-account-profile',
  templateUrl: './account-profile.component.html',
  styleUrls: ['./account-profile.component.scss']
})
export class AccountProfileComponent {
  user: any = null;
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

    switch (this.user.accountType) {
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

    this.user.created = new Date(Date.parse(this.user.created)).toLocaleDateString("ru-RU");
  }
}
