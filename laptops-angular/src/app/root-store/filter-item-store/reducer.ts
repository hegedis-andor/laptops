import { createReducer, on, Action } from '@ngrx/store';

import * as FilterItemStoreActions from './actions';
import { initialState, State } from './state';

const reducer = createReducer(
  initialState,
  on(FilterItemStoreActions.setCpuCoresDropdownItems, (state, { cpuCoresDropdownItems }) => ({
    ...state,
    cpuCoresDropdownItems
  })),
  on(FilterItemStoreActions.setDisplayResolutionDropdownItems, (state, { displayResolutionDropdownItems }) => ({
    ...state,
    displayResolutionDropdownItems
  })),
  on(FilterItemStoreActions.setCpuProducersCheckboxItems, (state, { cpuProducersCheckboxItems }) => ({
    ...state,
    cpuProducersCheckboxItems
  })),
  on(FilterItemStoreActions.setDedicatedGpuRadioButtonOptions, (state, { dedicatedGpuRadioButtonOptions }) => ({
    ...state,
    dedicatedGpuRadioButtonOptions
  })),
  on(FilterItemStoreActions.setSliderMinPrice, (state, { sliderMinPrice }) => ({
    ...state,
    sliderMinPrice
  })),
  on(FilterItemStoreActions.setSliderMaxPrice, (state, { sliderMaxPrice }) => ({
    ...state,
    sliderMaxPrice
  }))
);

export function filterItemReducer(state: State | undefined, action: Action) {
  return reducer(state, action);
}
