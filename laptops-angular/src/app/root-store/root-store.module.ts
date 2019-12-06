import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { FilterStoreModule } from './filter-store';
import { LaptopStoreModule } from './laptop-store';
import { FilterItemStoreModule } from './filter-item-store';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FilterStoreModule,
    LaptopStoreModule,
    FilterItemStoreModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([])
  ]
})
export class RootStoreModule {}
