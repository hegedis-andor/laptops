import { createAction, props } from '@ngrx/store';

export const setLaptopName = createAction(
  '[FILTER SIDEBAR] Set Laptop Name',
  props<{ laptopName: string }>()
);

export const setCpuCoresCounts = createAction(
  '[FILTER SIDEBAR] Set Cpu Cores Counts',
  props<{ cpuCoresCounts: string[] }>()
);

export const setDisplayResolutions = createAction(
  '[FILTER SIDEBAR] Set Display Resolutions',
  props<{ displayResolutions: string[] }>()
);

export const setCpuProducers = createAction(
  '[FILTER SIDEBAR] Set Cpu Producers',
  props<{ cpuProducers: string[] }>()
);

export const setDedicatedGpu = createAction(
  '[FILTER SIDEBAR] Set Dedicated Gpu',
  props<{ dedicatedGpu: string }>()
);

export const setMinPrice = createAction(
  '[FILTER SIDEBAR] Set Min Price',
  props<{ minPrice: number }>()
);

export const setMaxPrice = createAction(
  '[FILTER SIDEBAR] Set Max Price',
  props<{ maxPrice: number }>()
);
