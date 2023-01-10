import { Component } from '@angular/core';
// Data
import { PANGRAMS } from '../content/db-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  data = { title: 'EATangular' };

  pangrams = [...PANGRAMS];

  onKeyUp(str: string): void {
    this.data.title = str;
  }
}
