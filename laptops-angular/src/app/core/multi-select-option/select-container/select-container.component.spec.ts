import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectContainerComponent } from './select-container.component';
import { PortalModule } from '@angular/cdk/portal';
import { DROPDOWN_CONTENT } from '../select-option.tokens';
import { Component } from '@angular/core';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';

describe('SelectContainerComponent', () => {
  let component: SelectContainerComponent;
  let fixture: ComponentFixture<SelectContainerComponent>;

  beforeEach(async(() => {
    const MOCK_DROPDOWN_CONTENT = MockDropDownContentComponent;
    TestBed.configureTestingModule({
      declarations: [SelectContainerComponent, MOCK_DROPDOWN_CONTENT],
      imports: [PortalModule],
      providers: [{ provide: DROPDOWN_CONTENT, useValue: MOCK_DROPDOWN_CONTENT }]
    })
      .overrideModule(BrowserDynamicTestingModule, {
        set: { entryComponents: [MockDropDownContentComponent] }
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

@Component({
  selector: 'dropdown-content',
  template: ''
})
class MockDropDownContentComponent {}
