import { OverlayModule } from '@angular/cdk/overlay';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';

import { MultiSelectComponent } from './multi-select.component';
import { DropdownService } from '../dropdown.service';

describe('MultiSelectComponent', () => {
  let component: MultiSelectComponent;
  let fixture: ComponentFixture<MultiSelectComponent>;
  let dropdownService: DropdownService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MultiSelectComponent],
      imports: [MatIconModule, OverlayModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiSelectComponent);
    component = fixture.componentInstance;
    dropdownService = fixture.debugElement.injector.get(DropdownService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('OnInit', () => {
    it('should set isThereSelected false if empty array was sent to subject', () => {
      component.subject.next([]);
      expect(component.isThereSelected).toBe(false);
    });

    it('should set isThereSelected true if array with value was sent to subject', () => {
      component.subject.next(['test']);
      expect(component.isThereSelected).toBe(true);
    });

    it('should emit selectionChanged with an array of selected values', () => {
      spyOn(component.selectionChanged, 'emit');

      component.subject.next([]);
      expect(component.selectionChanged.emit).toHaveBeenCalledWith([]);

      component.subject.next(['option1', 'option2']);
      expect(component.selectionChanged.emit).toHaveBeenCalledWith(['option1', 'option2']);
    });
  });

  //
  describe('openDropdown', () => {
    it('should call dropdownService#openDropdown', () => {
      const spy = spyOn(dropdownService, 'openDropdown');
      const parentReference: HTMLElement = fixture.debugElement.nativeElement.querySelector('#parentReference');

      component.openDropDown(parentReference);
      expect(spy).toHaveBeenCalled();
    });
  });

  describe('onResize', () => {
    it('should call onResize - dropdownService.syncWidth on window.resize event', () => {
      spyOn(component, 'onResize').and.callThrough();
      spyOn(dropdownService, 'syncWidth');

      expect(component.onResize).not.toHaveBeenCalled();
      expect(dropdownService.syncWidth).not.toHaveBeenCalled();

      window.dispatchEvent(new Event('resize'));

      expect(component.onResize).toHaveBeenCalled();
      expect(dropdownService.syncWidth).toHaveBeenCalled();
    });
  });
});
