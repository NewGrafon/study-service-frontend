import { Component } from '@angular/core';
import {environment} from "../../../environments/environment";
import {Router} from "@angular/router";

@Component({
  selector: 'app-account-login',
  templateUrl: './account-login.component.html',
  styleUrls: ['./account-login.component.scss']
})
export class AccountLoginComponent {

  message: string = '';

  private changeState(obj: any) {
    if (obj.value === '') {
      obj.classList.add('red-outline');
    } else {
      obj.classList.remove('red-outline');
    }
    this.message = ''
  }
  async tryEnter(emailObj: any, passObj: any) {

    this.changeState(emailObj);
    this.changeState(passObj);

    if (emailObj.value !== '' && passObj.value !== '') {
      const body = {
        email: emailObj.value,
        password: passObj.value
      }

      const response = await fetch(`/api/login`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        mode: 'cors',
        body: JSON.stringify(body)
      });

      const result = await response.json();

      if (result.result) {
        await this.router.navigateByUrl(`/`);
      } else {
        this.message = 'Неверный пароль и/или эл. почта!'
      }
    }
  }

  constructor(private router: Router) {

  }
}
