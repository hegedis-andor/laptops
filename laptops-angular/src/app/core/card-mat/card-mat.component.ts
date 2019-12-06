import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { Laptop } from '../models/laptop.model';

@Component({
  selector: 'app-card-mat',
  templateUrl: './card-mat.component.html',
  styleUrls: ['./card-mat.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardMatComponent {
  @Input() laptop: Laptop;
  @Output() imageClicked = new EventEmitter<string[]>();

  constructor() {}

  clickOnImage(imageUrls: string[]) {
    this.imageClicked.emit(imageUrls);
  }
}
