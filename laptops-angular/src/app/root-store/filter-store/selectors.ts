import { createFeatureSelector, createSelector } from '@ngrx/store';

import { State } from './state';

const selectAllFilterState = createFeatureSelector<State>('filter');

export const selectFilterState = createSelector(
  selectAllFilterState,
  filterState => filterState
);
