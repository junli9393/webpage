import {Component, Input} from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blogdetail.component.html',
  styleUrls: ['./blogdetail.component.css'],
  providers: [DataService]
})
export class BlogdetailComponent {
  yourBoolean = true;
  count: number;
  constructor(dataaService: DataService) {
    this.count = dataaService.getChoice();
  }
}
