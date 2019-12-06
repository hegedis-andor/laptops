import { createFeatureSelector, createSelector } from '@ngrx/store';

import { State } from './state';

const getCpuCoresDropdownItems = (state: State) => state.cpuCoresDropdownItems;
const getDisplayResolutionDropdownItems = (state: State) => state.displayResolutionDropdownItems;
const getCpuProducersCheckboxItems = (state: State) => state.cpuProducersCheckboxItems;
const getDedicatedGpuRadioButtonOptions = (state: State) => state.dedicatedGpuRadioButtonOptions;
const getSliderMaxPrice = (state: State) => state.sliderMaxPrice;
const getSliderMinPrice = (state: State) => state.sliderMinPrice;

const selectFilterItemAllState = createFeatureSelector<State>('filterItem');


export const selectCpuCoresDropdownItems = createSelector(
  selectFilterItemAllState,
  getCpuCoresDropdownItems
);

export const selectDisplayResolutionDropdownItems = createSelector(
  selectFilterItemAllState,
  getDisplayResolutionDropdownItems
);

export const selectgetCpuProducersCheckboxItems = createSelector(
  selectFilterItemAllState,
  getCpuProducersCheckboxItems
);

export const selectDedicatedGpuRadioButtonOption = createSelector(
  selectFilterItemAllState,
  getDedicatedGpuRadioButtonOptions
);

export const selectSliderMaxPrice = createSelector(
  selectFilterItemAllState,
  getSliderMaxPrice
);

export const selectSliderMinPrice = createSelector(
  selectFilterItemAllState,
  getSliderMinPrice
);


export const selectFilterItemState = createSelector(
  selectFilterItemAllState,
  state => state
);
