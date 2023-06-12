import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {PopupSystemComponent} from "../../components/popup-system/popup-system.component";

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
      await this.router.navigateByUrl(`/login`);
      PopupSystemComponent.SendMessage('Регистрация произошла успешно!');
    } else if (result.exist) {
      PopupSystemComponent.SendMessage('Аккаунт с данным email уже существует!');
    } else {
      PopupSystemComponent.SendMessage('Произошла неизвестная ошибка, попробуйте еще раз.');
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

