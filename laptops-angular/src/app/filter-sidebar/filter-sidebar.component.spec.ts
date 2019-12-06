import { CommonModule } from '@angular/common';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Store, StoreModule } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';

import { RootStoreState, FilterStoreActions, LaptopStoreActions } from '../root-store';
import { FilterSidebarComponent } from './filter-sidebar.component';

describe('FilterSidebarComponent', () => {
  let component: FilterSidebarComponent;
  let fixture: ComponentFixture<FilterSidebarComponent>;
  let store: MockStore<RootStoreState.State>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FilterSidebarComponent],
      providers: [provideMockStore()],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [CommonModule, StoreModule.forRoot({})]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterSidebarComponent);
    component = fixture.componentInstance;
    component.cpuCoresTitle = 'cpuCoresTitle';
    component.cpuProducersTitle = 'cpuProducersTitle';
    component.dedicatedGpuTitle = 'dedicatedGpuTitle';
    component.displayResolutionTitle = 'displayResolutionTitle';
    component.cpuCoresDropdownItems$ = of(['2', '4']);
    component.cpuProducersCheckboxItems$ = of(['Intel', 'Amd']);
    component.dedicatedGpuRadioButtonOptions$ = of(['Yes', 'No', 'All']);
    component.displayResolutionDropdownItems$ = of(['1600 x 900', '1920 x 1080']);
    component.sliderMaxPrice$ = of(7000);
    component.sliderMinPrice$ = of(10);

    store = TestBed.get(Store);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#setLaptopName', () => {
    it('should dispatch FilterStoreActions#setLaptopName action with payload laptopName to the Store', () => {
      const laptopName = 'Test';
      const spy = spyOn(store, 'dispatch');
      component.setLaptopName(laptopName);

      expect(spy).toHaveBeenCalledWith(FilterStoreActions.setLaptopName({ laptopName }));
      expect(spy).toHaveBeenCalledWith(LaptopStoreActions.loadLaptops());
    });
  });

  describe('#setCpuCores', () => {
    it('should dispatch FilterStoreActions#setCpuCores action with payload cpuCores to the Store', () => {
      const cpuCoresCounts = ['1', '2'];
      const spy = spyOn(store, 'dispatch');
      component.setCpuCores(cpuCoresCounts);

      expect(spy).toHaveBeenCalledWith(FilterStoreActions.setCpuCoresCounts({ cpuCoresCounts }));
      expect(spy).toHaveBeenCalledWith(LaptopStoreActions.loadLaptops());
    });
  });

  describe('#setDisplayResolution', () => {
    it('should dispatch FilterStoreActions#setDisplayResolution action with payload displayResolutions to the Store', () => {
      const displayResolutions = ['1 x 2', '2 x 3'];
      const spy = spyOn(store, 'dispatch');
      component.setDisplayResolution(displayResolutions);

      expect(spy).toHaveBeenCalledWith(FilterStoreActions.setDisplayResolutions({ displayResolutions }));
      expect(spy).toHaveBeenCalledWith(LaptopStoreActions.loadLaptops());
    });
  });

  describe('#setDisplayResolution', () => {
    it('should dispatch FilterStoreActions#setCpuProducers action with payload cpuProducers to the Store', () => {
      const cpuProducers = ['prod1', 'prod2'];
      const spy = spyOn(store, 'dispatch');
      component.setCpuProducers(cpuProducers);

      expect(spy).toHaveBeenCalledWith(FilterStoreActions.setCpuProducers({ cpuProducers }));
      expect(spy).toHaveBeenCalledWith(LaptopStoreActions.loadLaptops());
    });
  });

  describe('#setDedicatedGpu', () => {
    it('should dispatch FilterStoreActions#setDedicatedGpu action with payload dedicatedGpu to the Store', () => {
      const dedicatedGpu = 'Test';
      const spy = spyOn(store, 'dispatch');
      component.setDedicatedGpu(dedicatedGpu);

      expect(spy).toHaveBeenCalledWith(FilterStoreActions.setDedicatedGpu({ dedicatedGpu }));
      expect(spy).toHaveBeenCalledWith(LaptopStoreActions.loadLaptops());
    });
  });

  describe('#setMinPrice', () => {
    it('should dispatch FilterStoreActions#setMinPrice action with payload minPrice to the Store', () => {
      const minPrice = -100;
      const spy = spyOn(store, 'dispatch');
      component.setMinPrice(minPrice);

      expect(spy).toHaveBeenCalledWith(FilterStoreActions.setMinPrice({ minPrice }));
      expect(spy).toHaveBeenCalledWith(LaptopStoreActions.loadLaptops());
    });
  });

  describe('#setMaxPrice', () => {
    it('should dispatch FilterStoreActions#setMaxPrice action with payload maxPrice to the Store', () => {
      const maxPrice = 99;
      const spy = spyOn(store, 'dispatch');
      component.setMaxPrice(maxPrice);

      expect(spy).toHaveBeenCalledWith(FilterStoreActions.setMaxPrice({ maxPrice }));
      expect(spy).toHaveBeenCalledWith(LaptopStoreActions.loadLaptops());
    });
  });
});
