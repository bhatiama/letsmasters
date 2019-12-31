import { Component, OnInit } from '@angular/core';
import { slideIn } from './../../animate';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
  animations: [
    slideIn
  ]
})
export class TimelineComponent implements OnInit {
  timeline = [];
  constructor() { }

  ngOnInit() {
    const list = document.getElementsByClassName('timeline');
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < list.length; i++) {
      this.timeline.push(list[i]);
    }
    console.log(this.timeline);
  }

  addClass(event) {
    const classes = event.target.classList;
    classes.add('animated', 'swing', 'infinite');
  }

  removeClass(event) {
    const classes = event.target.classList;
    classes.remove('animated', 'swing', 'infinite');
  }

}
