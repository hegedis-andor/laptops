import { OverlayModule } from '@angular/cdk/overlay';
import { NO_ERRORS_SCHEMA, Injector } from '@angular/core';
import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';

import { ModalService } from '../core/services/modal.service';
import { FilterSidebarComponent } from '../filter-sidebar/filter-sidebar.component';
import { MainContainerComponent } from './main-container.component';

describe('MainContainerComponent', () => {
  let component: MainContainerComponent;
  let fixture: ComponentFixture<MainContainerComponent>;
  let modalService: ModalService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MainContainerComponent, FilterSidebarComponent],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [StoreModule.forRoot({}), OverlayModule],
      providers: [ModalService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainContainerComponent);
    component = fixture.componentInstance;
    modalService = TestBed.get(ModalService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call modalService#openModal on #openImageModal', () => {
    spyOn(modalService, 'openModal');

    component.openImageModal(['url1', 'url2']);

    expect(modalService.openModal).toHaveBeenCalled();
  });

  afterEach(() => {
    fixture.destroy();
  });
});
