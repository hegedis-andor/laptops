import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { SelectOptionsComponent } from './select-options.component';
import { ReactiveFormsModule, FormGroup, FormBuilder } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MULTI_SELECT_DATA } from '../select-option.tokens';
import { MultiSelectData } from '../multi-select-data.model';
import { Subject } from 'rxjs';

describe('SelectOptionsComponent', () => {
  let component: SelectOptionsComponent;
  let fixture: ComponentFixture<SelectOptionsComponent>;
  let MOCK_MULTI_SELECT_DATA: MultiSelectData;

  beforeEach(async(() => {
    MOCK_MULTI_SELECT_DATA = {
      options: ['option1', 'option2'],
      selectedOptions: ['option1'],
      subject: new Subject<string[]>()
    };

    TestBed.configureTestingModule({
      declarations: [SelectOptionsComponent],
      imports: [ReactiveFormsModule, MatCheckboxModule],
      providers: [{ provide: MULTI_SELECT_DATA, useValue: MOCK_MULTI_SELECT_DATA }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('onChecked', () => {
  it('should next selectedOptions', () => {
      spyOn(component.subject, 'next');

      component.onChecked(component.checkBoxForm);

      expect(component.subject.next).toHaveBeenCalledWith(['option1']);
    });
  });

});
