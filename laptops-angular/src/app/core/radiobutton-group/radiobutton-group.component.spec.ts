import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadiobuttonGroupComponent } from './radiobutton-group.component';
import { MatRadioModule } from '@angular/material/radio';

describe('RadiobuttonGroupComponent', () => {
  let component: RadiobuttonGroupComponent;
  let fixture: ComponentFixture<RadiobuttonGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RadiobuttonGroupComponent],
      imports: [MatRadioModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadiobuttonGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('onChange', () => {
    it('should emit radioButtonChange when onChange called', () => {
      spyOn(component.radioButtonChange, 'emit');
      component.onChange('test');
      expect(component.radioButtonChange.emit).toHaveBeenCalledWith('test');
    });
  });
});
