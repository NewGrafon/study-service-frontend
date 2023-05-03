import {Component} from '@angular/core';
import {environment} from "../../../environments/environment";
import {Router} from "@angular/router";
import {logMessages} from "@angular-devkit/build-angular/src/builders/browser-esbuild/esbuild";

@Component({
  selector: 'app-account-registration',
  templateUrl: './account-registration.component.html',
  styleUrls: ['./account-registration.component.scss']
})
export class AccountRegistrationComponent {

  async tryRegister(fname: string, lname: string, email: string, pass: string, rpass: string) {

    if (pass === '' || pass !== rpass) {
      return console.log('"Пароль" и "Повторите пароль" не сходятся.');
    }

    if (fname === '' || lname === '' || email === '') {
      return console.log('Некоторые поля для данных не заполнены.')
    }

    const body = {
      firstname: fname,
      lastname: lname,
      email: email,
      password: pass
    }

    let response = await fetch(`/api/registration`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      mode: 'cors',
      body: JSON.stringify(body)
    });

    let result = await response.json();

    if (result.result === true) {
      console.log('Регистрация произошла успешно');
      await this.router.navigateByUrl(`/login`);
    } else if (result.exist) {
      console.log('Аккаунт с данным email уже существует!');
    } else {
      console.error(result);
    }

  }

  checkPassword(pass: string, rpass: string): boolean {
    if (pass === '' || (pass !== '' && rpass === '')) {
      return true;
    }

    return pass === rpass;
  }

  constructor(private router: Router) {}
}

