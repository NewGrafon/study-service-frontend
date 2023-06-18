import {Component, Input, OnInit} from '@angular/core';
import {IItem, ModerationComponent} from "../../pages/moderation/moderation.component";
import {PopupSystemComponent} from "../popup-system/popup-system.component";
import {EducatablePeoples} from "../../global-variables";

@Component({
  selector: 'app-moderation-item',
  templateUrl: './moderation-item.component.html',
  styleUrls: ['./moderation-item.component.scss']
})
export class ModerationItemComponent implements OnInit {

  @Input() item: IItem | undefined;
  _id: string = '';

  ngOnInit() {
    this._id = this.item?.creator?._id || '';
  }

  openRequest() {
    document.getElementById(this._id)?.classList.remove('hidden');
  }

  closeRequest() {
    document.getElementById(this._id)?.classList.add('hidden');
  }

  async touchRequest(type: TouchType) {
    const response = await fetch(`/api/${type}_teacher_request`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      mode: 'cors',
      body: JSON.stringify({_id: this._id})
    });
    const result = await response.json();
    if (result.result) {
      PopupSystemComponent.SendMessage(`Запрос ${type === TouchType.accept ? 'одобрен' : 'отклонен'}.`);
    } else {
      PopupSystemComponent.SendMessage(result.error);
    }

    ModerationComponent.Instance.updateRequests();
    this.closeRequest();
  }

  protected readonly TouchType = TouchType;
  protected readonly EducatablePeoples = EducatablePeoples;
}

enum TouchType {
  accept = 'accept',
  reject = 'reject'
}
