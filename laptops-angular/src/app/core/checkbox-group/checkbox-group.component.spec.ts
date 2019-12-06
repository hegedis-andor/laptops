import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { FormGroup, ReactiveFormsModule, FormArray, AbstractControl, FormBuilder } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { CheckboxGroupComponent } from './checkbox-group.component';

describe('CheckboxGroupComponent', () => {
  let component: CheckboxGroupComponent;
  let fixture: ComponentFixture<CheckboxGroupComponent>;
  let formBuilder: FormBuilder;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CheckboxGroupComponent],
      imports: [ReactiveFormsModule, MatCheckboxModule]
    }).compileComponents();
  }));

  beforeEach(inject([FormBuilder], (fb: FormBuilder) => {
    fixture = TestBed.createComponent(CheckboxGroupComponent);
    component = fixture.componentInstance;
    const items = ['checkBoxItem1', 'checkBoxItem2'];
    component.items = items;
    component.title = 'CheckboxGroup';
    formBuilder = fb;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit empty array checkedOptions if onChecked called without checked box', () => {
    const items = ['checkBoxItem1', 'checkBoxItem2'];
    component.checkBoxForm = formBuilder.group({
      checkboxes: formBuilder.array(items.map(_ => false))
    });
    spyOn(component.checkedBoxes, 'emit');
    component.onChecked(component.checkBoxForm);
    expect(component.checkedBoxes.emit).toHaveBeenCalledWith([]);
  });

  it('should emit all checkedOptions if onChecked called', () => {
    const items = ['checkBoxItem1', 'checkBoxItem2'];
    component.checkBoxForm = formBuilder.group({
      checkboxes: formBuilder.array(items.map(_ => true))
    });
    spyOn(component.checkedBoxes, 'emit');
    component.onChecked(component.checkBoxForm);
    expect(component.checkedBoxes.emit).toHaveBeenCalledWith(['checkBoxItem1', 'checkBoxItem2']);
  });
});
