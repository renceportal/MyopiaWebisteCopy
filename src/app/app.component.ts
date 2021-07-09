import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = "rence-script-website";
  display = 'none';

  timer;

  navbarOpen = false;

  ngOnInit() {
    // this.timer = setInterval(() => {
    //   this.display = 'block';
    // }, 2000);
  }

  clearTimer() {
    this.display = 'none';
    clearInterval(this.timer);
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  openModal() {
    this.display = 'block';
  }

  onCloseHandled() {
    this.display = 'none';
  }

}
