import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-radiobutton',
  templateUrl: './radiobutton.component.html',
  styleUrls: ['./radiobutton.component.scss'],
})
export class RadiobuttonComponent implements OnInit, ControlValueAccessor {

  @Input() label: string;
  @Input() id: string | number;
  @Input() required: boolean;
  @Input() checked: boolean;
  @Input() value: string;
  @Input() name: string;
  @Input() tabIndex: number;
  @Input() disabled: boolean;
  @Output() selection: EventEmitter<number | string> = new EventEmitter();
  onChange = (_: any) => {};

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.onChange(this.checked);
  }

  writeValue(value: any): void {
    this.checked = !!value;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
  }

}
