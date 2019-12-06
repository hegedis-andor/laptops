import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchBoxComponent {
  @Input() placeholder: string;
  @Output() searchText = new EventEmitter<string>();
  dirty: boolean;

  constructor() {}

  onSearch(input: string) {
    this.searchText.emit(input);
  }

  onBlur(value) {
    this.dirty = value ? true : false;
  }
}
