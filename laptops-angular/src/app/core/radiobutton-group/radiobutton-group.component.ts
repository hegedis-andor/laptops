import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-radiobutton-group',
  templateUrl: './radiobutton-group.component.html',
  styleUrls: ['./radiobutton-group.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RadiobuttonGroupComponent implements OnInit {
  @Input() options: string[];
  @Input() title: string;
  @Input() optionChecked: number;
  @Output() radioButtonChange = new EventEmitter<string>();
  radiobuttonForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.radiobuttonForm = this.fb.group({
      radiobuttons: this.fb.array(
        this.options.map((_, index) => {
          return index === this.optionChecked;
        })
      )
    });
  }

  onChange(value) {
    console.log(value);
    this.radioButtonChange.emit(value);
  }
}
