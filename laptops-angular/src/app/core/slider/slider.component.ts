import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SliderComponent {
  @Input() minValue = 10;
  @Input() title: string;
  @Input() maxValue = 5000;
  @Input() interval = 1000;
  @Input() value = 5000;
  @Output() valueChanged = new EventEmitter<number>();

  onChange(value) {
    this.valueChanged.emit(value);
  }
}
