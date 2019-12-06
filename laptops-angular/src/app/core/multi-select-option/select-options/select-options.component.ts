import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';

import { MultiSelectData } from '../multi-select-data.model';
import { MULTI_SELECT_DATA } from '../select-option.tokens';

@Component({
  selector: 'app-select-options',
  templateUrl: './select-options.component.html',
  styleUrls: ['./select-options.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectOptionsComponent implements OnInit {
  options: string[];
  selectedOptions: string[];
  selectionChange: (args: string[]) => void;
  checkBoxForm: FormGroup;

  constructor(@Inject(MULTI_SELECT_DATA) data: MultiSelectData, private fb: FormBuilder) {
    this.options = data.options;
    this.selectionChange = data.selectionChange;
    this.selectedOptions = data.selectedOptions;
  }

  ngOnInit(): void {
    this.checkBoxForm = this.fb.group({
      checkboxes: this.fb.array(
        this.options.map(option => {
          return this.selectedOptions.some(selectedOption => option === selectedOption);
        })
      )
    });
  }

  onChecked(checkBoxForm: FormGroup): void {
    const selectedOptions: string[] = [];

    checkBoxForm.value.checkboxes.map((checkBoxOption, index) => {
      if (checkBoxOption) {
        selectedOptions.push(this.options[index]);
      }
    });

    this.selectionChange(selectedOptions);
  }
}
