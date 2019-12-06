import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { FilterItemStoreEffects } from './effects';
import { filterItemReducer } from './reducer';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('filterItem', filterItemReducer),
    EffectsModule.forFeature([FilterItemStoreEffects])
  ]
})
export class FilterItemStoreModule { }
