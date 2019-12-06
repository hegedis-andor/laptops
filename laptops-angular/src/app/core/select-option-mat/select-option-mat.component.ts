import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-select-option-mat',
  templateUrl: './select-option-mat.component.html',
  styleUrls: ['./select-option-mat.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectOptionMatComponent {
  @Input() title: string;
  @Input() items: string[];
  @Output() selectionChanged = new EventEmitter<string[]>();

  itemsControl: FormControl = new FormControl();

  constructor() {}

  onSelection(selections) {
    this.selectionChanged.emit(selections);
  }
}
