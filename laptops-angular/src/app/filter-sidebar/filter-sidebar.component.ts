import { Component, ChangeDetectionStrategy } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { FilterItemStoreSelectors, FilterStoreActions, LaptopStoreActions, RootStoreState, RootStoreSelectors } from '../root-store';

@Component({
  selector: 'app-filter-sidebar',
  templateUrl: './filter-sidebar.component.html',
  styleUrls: ['./filter-sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterSidebarComponent {
  cpuCoresDropdownItems$: Observable<string[]>;
  displayResolutionDropdownItems$: Observable<string[]>;
  cpuProducersCheckboxItems$: Observable<string[]>;
  dedicatedGpuRadioButtonOptions$: Observable<string[]>;
  sliderCurrentMaxPrice$: Observable<number>;
  sliderMaxPrice$: Observable<number>;
  sliderMinPrice$: Observable<number>;

  searchBoxTitle = 'Laptop name';
  cpuCoresTitle = 'Cpu cores:';
  displayResolutionTitle = 'Display resolution:';
  cpuProducersTitle = 'Cpu producers:';
  dedicatedGpuTitle = 'Dedicated Gpu:';
  sliderMaxPriceTitle = 'Max price:';

  constructor(private store: Store<RootStoreState.State>) {
    this.cpuCoresDropdownItems$ = this.store.pipe(select(FilterItemStoreSelectors.selectCpuCoresDropdownItems));
    this.displayResolutionDropdownItems$ = this.store.pipe(select(FilterItemStoreSelectors.selectDisplayResolutionDropdownItems));
    this.cpuProducersCheckboxItems$ = this.store.pipe(select(FilterItemStoreSelectors.selectgetCpuProducersCheckboxItems));
    this.dedicatedGpuRadioButtonOptions$ = this.store.pipe(select(FilterItemStoreSelectors.selectDedicatedGpuRadioButtonOption));
    this.sliderMinPrice$ = this.store.pipe(select(FilterItemStoreSelectors.selectSliderMinPrice));
    this.sliderMaxPrice$ = this.store.pipe(select(FilterItemStoreSelectors.selectSliderMaxPrice));
    this.sliderCurrentMaxPrice$ = this.store.pipe(select(RootStoreSelectors.selectSliderMaxPrice));
  }

  setLaptopName(laptopName: string) {
    this.store.dispatch(FilterStoreActions.setLaptopName({ laptopName }));
    this.store.dispatch(LaptopStoreActions.loadLaptops());
  }

  setCpuCores(cpuCoresCounts: string[]) {
    this.store.dispatch(FilterStoreActions.setCpuCoresCounts({ cpuCoresCounts }));
    this.store.dispatch(LaptopStoreActions.loadLaptops());
  }

  setDisplayResolution(displayResolutions: string[]) {
    this.store.dispatch(FilterStoreActions.setDisplayResolutions({ displayResolutions }));
    this.store.dispatch(LaptopStoreActions.loadLaptops());
  }

  setCpuProducers(cpuProducers: string[]) {
    this.store.dispatch(FilterStoreActions.setCpuProducers({ cpuProducers }));
    this.store.dispatch(LaptopStoreActions.loadLaptops());
  }

  setDedicatedGpu(dedicatedGpu: string) {
    this.store.dispatch(FilterStoreActions.setDedicatedGpu({ dedicatedGpu }));
    this.store.dispatch(LaptopStoreActions.loadLaptops());
  }

  setMinPrice(minPrice: number) {
    this.store.dispatch(FilterStoreActions.setMinPrice({ minPrice }));
    this.store.dispatch(LaptopStoreActions.loadLaptops());
  }

  setMaxPrice(maxPrice: number) {
    this.store.dispatch(FilterStoreActions.setMaxPrice({ maxPrice }));
    this.store.dispatch(LaptopStoreActions.loadLaptops());
  }
}
