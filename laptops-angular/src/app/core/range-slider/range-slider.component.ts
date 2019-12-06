import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
  ChangeDetectorRef,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-range-slider',
  templateUrl: './range-slider.component.html',
  styleUrls: ['./range-slider.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RangeSliderComponent implements OnInit, OnChanges {
  @ViewChild('range', { static: true }) range: ElementRef;
  @ViewChild('knob', { static: true }) knob: ElementRef;
  @Input() minInputValue: number;
  @Input() maxInputValue: number;
  @Input() currentMaxValue: number;
  @Output() minValueChanged = new EventEmitter<number>();
  @Output() maxValueChanged = new EventEmitter<number>();
  knobOne: number;
  knobTwo: number;
  knobWidth: number;
  rangeWidth: number;
  dragPosition: { x: number; y: number };
  isEmitted: boolean;

  constructor() {}

  ngOnInit(): void {
    this.knobWidth = this.knob.nativeElement.clientWidth;
    this.rangeWidth = this.range.nativeElement.clientWidth;
    this.knobOne = this.minInputValue;
    this.knobTwo = this.currentMaxValue || this.maxInputValue;
    this.syncMaxPrice(this.knobTwo);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.currentMaxValue.previousValue !== changes.currentMaxValue.currentValue && !this.isEmitted) {
      this.knobTwo = changes.currentMaxValue.currentValue;
      this.syncMaxPrice(this.knobTwo);
      this.isEmitted = false;
    }
  }

  onKnobOneDrag(movedDistanceInPixel) {
    const currentPositionValue = Math.floor(movedDistanceInPixel);
    const maxOld = this.rangeWidth + this.knobWidth;
    const value = Math.floor(this.rescaleMinMax(this.minInputValue, this.maxInputValue, maxOld, currentPositionValue));

    this.knobOne = this.limitValueToScale(value, this.minInputValue, this.maxInputValue);

    this.emitValue(this.knobOne, this.knobTwo);
  }

  onKnobTwotDrag(movedDistanceInPixel) {
    const currentPositionValue = Math.ceil(movedDistanceInPixel);
    const maxOld = this.rangeWidth - this.knobWidth;
    const value = Math.floor(this.rescaleMinMax(this.maxInputValue, this.minInputValue, -maxOld, currentPositionValue));

    this.knobTwo = this.limitValueToScale(value, this.minInputValue, this.maxInputValue);

    this.emitValue(this.knobOne, this.knobTwo);
    this.isEmitted = true;
  }

  syncMaxPrice(currentMaxValue: number) {
    const maxNew = this.rangeWidth - this.knobWidth;
    const positionInPixel = this.rescaleMinMax(0, maxNew, this.maxInputValue, currentMaxValue);
    this.dragPosition = { x: -maxNew + positionInPixel, y: 0 };
  }

  private rescaleMinMax(minNew, maxNew, maxOld, value): number {
    const minOld = 0;
    return ((maxNew - minNew) / (maxOld - minOld)) * (value - maxOld) + maxNew;
  }

  private emitValue(knobOneValue: number, knobTwoValue: number) {
    if (knobOneValue <= knobTwoValue) {
      this.minValueChanged.emit(knobOneValue);
      this.maxValueChanged.emit(knobTwoValue);
    } else {
      this.minValueChanged.emit(knobTwoValue);
      this.maxValueChanged.emit(knobOneValue);
    }
  }

  private limitValueToScale(value, minInputValue, maxInputValue): number {
    if (value < minInputValue) {
      return minInputValue;
    } else if (value > maxInputValue) {
      return maxInputValue;
    } else {
      return value;
    }
  }
}
