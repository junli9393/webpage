import {Component, OnDestroy} from '@angular/core';
import {DataService} from './data.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  providers: [DataService]
})
export class BlogComponent {
  public count: number;
  constructor(dataservice: DataService) {
    dataservice.setChoice(1);
  }
}

