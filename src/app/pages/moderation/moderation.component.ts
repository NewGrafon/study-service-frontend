import {Component} from '@angular/core';

@Component({
  selector: 'app-moderation',
  templateUrl: './moderation.component.html',
  styleUrls: ['./moderation.component.scss']
})
export class ModerationComponent {

  static listContent: IItem[] = [];

  static deleteItem(_id: string): void {
    this.listContent = this.listContent.filter(item => item.creator._id !== _id);
  }

  async changeType(elem: any): Promise<void> {

    document.querySelectorAll('.choose')
      .forEach(arrElem => {
        arrElem.classList.remove('active');
      });
    elem.classList.add('active');

    const switchBox = document.getElementById('switch-box');
    const type = elem.id;

    if (type === 'new') {
      switchBox?.classList.remove('right');
      switchBox?.classList.add('left');
    } else if (type === 'edit') {
      switchBox?.classList.remove('left');
      switchBox?.classList.add('right');
    }

    const url = type === 'new' ? '/api/get_new_teachers' : '/api/get_wanna_edit_teachers';

    const response = await fetch(url);
    const result = await response.json();

    ModerationComponent.listContent = result.map((item: any) => {
      item.created = new Date(item.created).toLocaleDateString('ru-RU');
      return item;
    });
  }

  constructor() {
    const url = '/api/get_new_teachers';

    fetch(url)
      .then((result) => {
        result.json()
          .then(jresult => {
            ModerationComponent.listContent = jresult.map((item: any) => {
              item.created = new Date(item.created).toLocaleDateString('ru-RU');
              return item;
            });
          })
      });
  }

  protected readonly ModerationComponent = ModerationComponent;
}

export interface IItem {
  created: Date,
  creator: {
    _id: string,
    firstname: string,
    lastname: string
  }

  requestInfo: {
    education: string,
    educationPlace: string,
    workExperience: string,
    canEducatePeoples: string[],
    educateDirections: string[],
  }
}
