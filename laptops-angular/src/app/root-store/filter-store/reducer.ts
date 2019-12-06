import { createReducer, on, Action } from '@ngrx/store';

import * as FilterStoreActions from './actions';
import { initialState, State } from './state';

const reducer = createReducer(
  initialState,
  on(FilterStoreActions.setLaptopName, (state, { laptopName }) => ({
    ...state,
    laptopName
  })),
  on(FilterStoreActions.setCpuCoresCounts, (state, { cpuCoresCounts }) => ({
    ...state,
    cpuCoresCounts
  })),
  on(FilterStoreActions.setDisplayResolutions, (state, { displayResolutions }) => ({
    ...state,
    displayResolutions
  })),
  on(FilterStoreActions.setCpuProducers, (state, { cpuProducers }) => ({
    ...state,
    cpuProducers
  })),
  on(FilterStoreActions.setDedicatedGpu, (state, { dedicatedGpu }) => ({
    ...state,
    dedicatedGpu
  })),
  on(FilterStoreActions.setMinPrice, (state, { minPrice }) => ({
    ...state,
    minPrice
  })),
  on(FilterStoreActions.setMaxPrice, (state, { maxPrice }) => ({
    ...state,
    maxPrice
  }))
);

export function filterReducer(state: State | undefined, action: Action) {
  return reducer(state, action);
}
