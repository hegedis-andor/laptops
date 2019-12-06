import { Overlay, OverlayModule, OverlayRef } from '@angular/cdk/overlay';
import { TestBed, ComponentFixture } from '@angular/core/testing';

import { DropdownService } from './dropdown.service';
import { Component } from '@angular/core';
import { Subject } from 'rxjs';

describe('DropdownService', () => {
  let dropdownService: DropdownService;
  let overlayRef: jasmine.SpyObj<OverlayRef>;
  let hostFixture: ComponentFixture<TestHostComponent>;
  let htmlElement: HTMLElement;
  let backdropClickSubject: Subject<any>;


  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestHostComponent],
      providers: [DropdownService],
      imports: [OverlayModule]
    });

    hostFixture = TestBed.createComponent(TestHostComponent);
    htmlElement = hostFixture.debugElement.nativeElement.querySelector('.dropdownHost');
    backdropClickSubject = new Subject();
    const overlay: jasmine.SpyObj<Overlay> = TestBed.get(Overlay);
    overlayRef = jasmine.createSpyObj<OverlayRef>('OverlayRef', {
      attach: undefined,
      dispose: undefined,
      updateSize: undefined,
      backdropClick: backdropClickSubject
    });
    spyOn(overlay, 'create');
    overlay.create.and.returnValue(overlayRef);
    dropdownService = TestBed.get(DropdownService);
  });

  it('should be created', () => {
    expect(dropdownService).toBeTruthy();
  });

  it('should show dropdown overlay', () => {
    dropdownService.openDropdown(htmlElement);
    expect(overlayRef.attach).toHaveBeenCalled();
  });

  it('should dispose overlay when backdropClick happen', () => {
    dropdownService.openDropdown(htmlElement);
    expect(overlayRef.dispose).not.toHaveBeenCalled();
    backdropClickSubject.next();
    expect(overlayRef.dispose).toHaveBeenCalled();
  });
});

@Component({
  selector: 'app-test-host',
  template: '<div class="dropdownHost"></div>',
  providers: [DropdownService]
})
class TestHostComponent {}
