import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { checkingAnimation } from './checking.animation';

interface CheckboxChange {
  name: string;
  id: string | number;
  checked: boolean;
}

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  animations: [checkingAnimation],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxComponent),
      multi: true
    }
  ]
})
export class CheckboxComponent implements ControlValueAccessor {
  @Input() label = 'CheckboxLabel';
  @Input() id: string | number;
  @Input() required: boolean;
  @Input() checked: boolean;
  @Input() value: string;
  @Input() name: string;
  @Input() tabIndex: number;
  @Input() disabled: boolean;
  onChange = (_: any) => {};

  onClick() {
    this.checked = !this.checked;
    this.onChange(this.checked);
  }

  writeValue(value: any): void {
    this.checked = !!value;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {}
}
