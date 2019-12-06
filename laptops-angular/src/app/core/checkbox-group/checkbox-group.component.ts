import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-checkbox-group',
  templateUrl: './checkbox-group.component.html',
  styleUrls: ['./checkbox-group.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckboxGroupComponent implements OnInit {
  @Input() title: string;
  @Input() items: string[];
  @Output() checkedBoxes = new EventEmitter<string[]>();
  checkBoxForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.checkBoxForm = this.fb.group({
      checkboxes: this.fb.array(this.items.map(_ => false))
    });
  }

  onChecked(form: FormGroup) {
    const checkedOptions: any[] = [];

    form.value.checkboxes.map((checkBoxOption, index) => {
      if (checkBoxOption) {
        checkedOptions.push(this.items[index]);
      }
    });

    this.checkedBoxes.emit(checkedOptions);
  }
}
