import {Component} from '@angular/core';

@Component({
  selector: 'app-moderation',
  templateUrl: './moderation.component.html',
  styleUrls: ['./moderation.component.scss']
})
export class ModerationComponent {

  listContent: IItem[] = [
    {
      creationDate: '21.21.21',
      creator: {
        _id: '',
        firstname: 'aboba',
        lastname: 'biba',
      },
      requestInfo: {
        education: '',
        educationPlace: '',
        workExperience: '',
        canEducatePeoples: [],
        educateDirections: []
      }
    }
  ];

  async changeType(elem: any) {

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

    // const response = await fetch(url);
    // const result = await response.json();
    //
    // if (result.length > 0) {
    //   this.listContent = result;
    // }
  }
}

interface IItem {
  creationDate: string,
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
