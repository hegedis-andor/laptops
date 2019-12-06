import { ComponentType } from '@angular/cdk/overlay';
import { InjectionToken } from '@angular/core';
import { MultiSelectData } from './multi-select-data.model';

export const MULTI_SELECT_DATA = new InjectionToken<MultiSelectData>('MULTI_SELECT_DATA');
export const DROPDOWN_CONTENT = new InjectionToken<ComponentType<any>>('DROPDOWN_CONTENT');
