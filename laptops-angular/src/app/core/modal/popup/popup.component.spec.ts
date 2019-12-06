import { PortalModule } from '@angular/cdk/portal';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { POPUP_DATA_COMPONENT } from '../modal.tokens';
import { PopupComponent } from './popup.component';
import { Component } from '@angular/core';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';

describe('PopupComponent', () => {
  let component: PopupComponent;
  let fixture: ComponentFixture<PopupComponent>;

  beforeEach(async(() => {
    const MOCK_POPUP_DATA_COMPONENT = PopupStubComponent;
    TestBed.configureTestingModule({
      declarations: [ PopupComponent, PopupStubComponent ],
      imports: [PortalModule],
      providers: [{provide: POPUP_DATA_COMPONENT, useValue: MOCK_POPUP_DATA_COMPONENT}],
    }).overrideModule(BrowserDynamicTestingModule, {
      set: {
        entryComponents: [PopupStubComponent]
      }
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

@Component({
  selector: 'app-popup-content',
  template: ''
})
class PopupStubComponent {}
