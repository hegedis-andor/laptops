import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';


@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TextInputComponent implements ControlValueAccessor{

  @Input() placeholder: string;
  @Output() searchText = new EventEmitter<string>();
  value: string;
  dirty: boolean;
  onChange = (_: any) => {};

  constructor() {}

  onKeyup(input: string) {
    this.searchText.emit(input);
    this.onChange(input)
  }

  onBlur(value) {
    this.dirty = value ? true : false;
  }

  writeValue(value: string): void {
    this.value = value;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
  }
}

