import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { laptopReducer } from './reducer';
import { EffectsModule } from '@ngrx/effects';
import { LaptopStoreEffects } from './effects';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('laptop', laptopReducer),
    EffectsModule.forFeature([LaptopStoreEffects])
  ]
})
export class LaptopStoreModule { }
