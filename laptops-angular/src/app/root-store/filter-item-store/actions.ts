import { createAction, props } from '@ngrx/store';

export const setCpuCoresDropdownItems = createAction(
  '[FILTER ITEM] Set Cpu Cores Dropdown Items',
  props<{ cpuCoresDropdownItems: string[] }>()
);

export const setDisplayResolutionDropdownItems = createAction(
  '[FILTER ITEM] Set Display Resolution Dropdown Items',
  props<{ displayResolutionDropdownItems: string[] }>()
);

export const setCpuProducersCheckboxItems = createAction(
  '[FILTER ITEM] Set Cpu Producers Checkbox Items',
  props<{ cpuProducersCheckboxItems: string[] }>()
);

export const setDedicatedGpuRadioButtonOptions = createAction(
  '[FILTER ITEM] Set Dedicated GPU Options',
  props<{ dedicatedGpuRadioButtonOptions: string[] }>()
);

export const setSliderMinPrice = createAction(
  '[FILTER ITEM] Set Slider Min Price',
  props<{ sliderMinPrice: number }>()
);

export const setSliderMaxPrice = createAction(
  '[FILTER ITEM] Set Slider Max Price',
  props<{ sliderMaxPrice: number }>()
);
