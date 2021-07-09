import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myopia-training',
  templateUrl: './myopia-training.component.html',
  styleUrls: ['./myopia-training.component.css']
})
export class MyopiaTrainingComponent implements OnInit {
  height = 50;
  width = 50;
  white = 'white';
  black = 'black';
  focus = 0;
  focusSmall = 0;
  show1 = false;
  public innerWidth: any;

  constructor() { }

  ngOnInit(): void {
    this.focusNumber();
    setTimeout(() => {
      this.show1 = true;
    }, 13500)
  }

  focusNumber() {
    this.innerWidth = window.innerWidth;

    if (this.innerWidth <= 600) {
      setInterval(() => {
        this.focus = Math.floor(Math.random() * 99);
      }, 4000);
    } else {
      setInterval(() => {
        this.focus = Math.floor(Math.random() * 99);
      }, 3005);
    }
  }
}
