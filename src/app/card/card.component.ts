import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pangram } from '../structures/Pangram';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass'],
})
export class CardComponent {
  @Input()
  pangramObj: Pangram = { pangram: '', pangramIndex: 0, pangrams: [] };

  @Input()
  firstEl: boolean = false;

  @Output()
  pangramEmitter = new EventEmitter<Pangram>();

  onPangramClick() {
    // This event send the pangram to the app component
    this.pangramObj.pangramIndex = Math.trunc(
      Math.random() * this.pangramObj.pangrams.length
    );
    this.pangramObj.pangram =
      this.pangramObj.pangrams[this.pangramObj.pangramIndex];
    this.pangramEmitter.emit(this.pangramObj);
  }
}
