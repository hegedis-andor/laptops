import { createAction, props } from '@ngrx/store';
import { Laptop } from 'src/app/core/models/laptop.model';

export const loadLaptops = createAction(
  '[LAPTOP/API] Load Laptops Effect'
);

export const loadInitialLaptops = createAction(
  '[LAPTOP/API] Load Initial Laptops Effect'
);

export const setLoadLaptopsError = createAction(
  '[LAPTOP/API] Set Load Laptops Error',
  props<{ error: any }>()
);

export const setLaptops = createAction(
  '[LAPTOP] Set Laptops In Store',
  props<{ laptops: Laptop[] }>()
);
