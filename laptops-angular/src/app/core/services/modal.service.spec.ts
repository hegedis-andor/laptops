import { TestBed, ComponentFixture, inject } from '@angular/core/testing';

import { ModalService } from './modal.service';
import { OverlayModule, Overlay, OverlayRef, ComponentType } from '@angular/cdk/overlay';
import { Component, Injector } from '@angular/core';
import { Subject } from 'rxjs';

describe('ModalService', () => {
  let modalService: ModalService;
  let overlayRef: jasmine.SpyObj<OverlayRef>;
  let backdropClickSubject: Subject<any>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [OverlayModule],
      declarations: [TestModalComponent]
    });

    const overlay: jasmine.SpyObj<Overlay> = TestBed.get(Overlay);
    backdropClickSubject = new Subject();
    overlayRef = jasmine.createSpyObj<OverlayRef>('OverlayRef', {
      attach: undefined,
      dispose: undefined,
      backdropClick: backdropClickSubject
    });
    spyOn(overlay, 'create');
    overlay.create.and.returnValue(overlayRef);
    modalService = TestBed.get(ModalService);
  });

  it('should be created', () => {
    expect(modalService).toBeTruthy();
  });

  it('should open modal overlay', inject([Injector], (injector: Injector) => {
    modalService.openModal(TestModalComponent, injector);
    expect(overlayRef.attach).toHaveBeenCalled();
  }));

  it('should dispose modal overlay on backdropclick', inject([Injector], (injector: Injector) => {
    modalService.openModal(TestModalComponent, injector);
    expect(overlayRef.dispose).not.toHaveBeenCalled();
    backdropClickSubject.next();
    expect(overlayRef.dispose).toHaveBeenCalled();
  }));

});

@Component({
  selector: 'test-modal',
  template: ''
})
class TestModalComponent {}
