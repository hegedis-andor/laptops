import { createReducer, Action, on } from '@ngrx/store';
import * as LaptopActions from './actions';
import { initialState, State } from './state';

const reducer = createReducer(
  initialState,
  on(LaptopActions.setLaptops, (state, { laptops }) => ({
    ...state,
    laptops
  })),
  on(LaptopActions.setLoadLaptopsError, (state, { error }) => ({
    ...state,
    error
  }))
);

export function laptopReducer(state: State | undefined, action: Action) {
  return reducer(state, action);
}
