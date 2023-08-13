
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'About';
  constructor() { }

  menuvariable: boolean = false;
  menu_icon_variable: boolean = false;
  openMenu() {
    this.menuvariable =! this.menuvariable;
    this.menu_icon_variable =! this.menu_icon_variable
  }
}
