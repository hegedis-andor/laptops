import { createSelector } from '@ngrx/store';
import { FilterStoreSelectors } from './filter-store';
import { FilterItemStoreSelectors } from './filter-item-store';
import { LaptopStoreSelectors } from './laptop-store';

export const selectFilterItems = createSelector(
  FilterItemStoreSelectors.selectFilterItemState,
  filterItems => filterItems
);

export const selectFilters = createSelector(
  FilterStoreSelectors.selectFilterState,
  filters => filters
);

export const selectSliderMaxPrice = createSelector(
  FilterStoreSelectors.selectFilterState,
  filter => filter.maxPrice
);

export const selectLaptops = createSelector(
  LaptopStoreSelectors.selectLaptops,
  laptops => laptops
);
