import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from './state';

const getLaptops = (state: State): any => state.laptops;
const getLaptopError = (state: State): any => state.error;

const selectLaptopState = createFeatureSelector('laptop');

export const selectLaptops = createSelector(
  selectLaptopState,
  getLaptops
);

export const selectLaptopError = createSelector(
  selectLaptopState,
  getLaptopError
);
