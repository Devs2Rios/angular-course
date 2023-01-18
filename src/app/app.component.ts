import { Component } from '@angular/core';
// Data
import { PANGRAMS, CATEGORIES } from '../content/db-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  data = { title: 'EATangular' };
  title = 'AMEGA';
  price = 10;
  pangrams = [...PANGRAMS];
  categories = [...CATEGORIES];
  now = new Date();

  onKeyUp(str: string): void {
    this.data.title = str;
  }

  changePangram(event: Event): void {
    console.log(event.target);
  }

  setColor(color: string) {
    return { color: color };
  }
}
