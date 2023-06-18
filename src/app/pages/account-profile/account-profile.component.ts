import {Component, OnInit} from '@angular/core';
import { Router } from "@angular/router";
import { IUserSchema, userInfo } from "../../global-variables";
import { AppComponent } from "../../app.component";
import { TeacherFormComponent } from "../../components/teacher-form/teacher-form.component";
import {PopupSystemComponent} from "../../components/popup-system/popup-system.component";

@Component({
  selector: 'app-account-profile',
  templateUrl: './account-profile.component.html',
  styleUrls: ['./account-profile.component.scss']
})
export class AccountProfileComponent implements OnInit {
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

  async changeAvatar(input: HTMLInputElement): Promise<void> {
    // @ts-ignore
    const file: File = input.files[0];
    const body: any = {};

    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = async () => {
      body.mimetype = file.type;
      body.size = file.size;
      body.buffer = reader.result;

      const response = await fetch('/api/change_profile_picture', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
      });

      const result = await response.json();
      if (result.result) {
        PopupSystemComponent.SendMessage('Изображения профиля успешно обновлено!');
        try {
          // @ts-ignore
          document.getElementById("profile_picture").style.backgroundImage = `url('${body.buffer}')`;
        } catch (e) {
          console.error(e)
        }
      } else {
        console.error(result.error);
        PopupSystemComponent.SendMessage('Произошла неизвестная ошибка!');
      }
    };
    reader.onerror = (error) => {
      PopupSystemComponent.SendMessage('Произошла неизвестная ошибка!');
      console.log('Error: ', error);
    };
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

  async ngOnInit(): Promise<void> {
    const response = await fetch('/api/get_profile_picture');
    const result = await response.json();
    if (result.result) {
      try {
        // @ts-ignore
        document.getElementById("profile_picture").style.backgroundImage = `url('${result.image.buffer}')`;
      } catch (e) {
        console.error(e)
      }
    }
  }

  protected readonly TeacherFormComponent = TeacherFormComponent;
}
