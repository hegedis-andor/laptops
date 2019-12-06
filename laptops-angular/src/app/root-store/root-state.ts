import { FilterStoreState } from './filter-store';
import { FilterItemStoreState } from './filter-item-store';
import { LaptopStoreState } from './laptop-store';

export interface State {
  filterItems: FilterItemStoreState.State;
  filter: FilterStoreState.State;
  laptops: LaptopStoreState.State;
}
