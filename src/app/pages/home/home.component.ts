import { Component } from '@angular/core';
import {StudyLinks} from "../../GlobalVariables";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

    protected readonly StudyLinks = StudyLinks;
}

interface IRepetitor {
  firstname: string,
  lastname: string,

}
