import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectOptionMatComponent } from './select-option-mat.component';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('SelectOptionMatComponent', () => {
  let component: SelectOptionMatComponent;
  let fixture: ComponentFixture<SelectOptionMatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SelectOptionMatComponent],
      imports: [MatSelectModule, ReactiveFormsModule, BrowserAnimationsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectOptionMatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('onSelection', () => {
    it('should emit selections', () => {
      spyOn(component.selectionChanged, 'emit');
      component.onSelection('selection');
      expect(component.selectionChanged.emit).toHaveBeenCalledWith('selection');
    });
  });
});
