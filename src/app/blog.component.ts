import {Component, OnDestroy, OnInit} from '@angular/core';
import {DataService} from './data.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {
  count = 1;
  constructor(private dataservice: DataService) {}
  title = 'What Do You Want To Be When You Grow Up?'
  text_display = ''

  typingCallback(that) {
    const total_len = that.title.length;
    const cur_len = that.text_display.length;
    if (cur_len < total_len) {
      that.text_display += that.title[cur_len];
    } else {}
    setTimeout(that.typingCallback, 80, that);
  }

  ngOnInit() {
    this.typingCallback(this);
  }

  sendMessage(event, title: string): void {
    console.log('sendMessage is called')
    const elementId: string = (event.target as Element).id;
    console.log(event.target.id);
    this.dataservice.sendMessage(event.target.id);
    this.dataservice.sendTitle(title);
  }
  sendMessageByNumber(number: number, title: string) {
    this.dataservice.sendMessage(number);
    this.dataservice.sendTitle(title);
  }
}

