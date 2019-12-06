import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action, select, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, debounceTime, distinctUntilChanged, map, switchMap, withLatestFrom } from 'rxjs/operators';
import { Laptop } from 'src/app/core/models/laptop.model';
import { LaptopService } from 'src/app/services/laptop.service';

import { FilterStoreSelectors } from '../filter-store';
import * as LaptopStoreActions from './actions';
import { State } from './state';

@Injectable()
export class LaptopStoreEffects {
  getFilteredLaptops$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(LaptopStoreActions.loadLaptops),
      withLatestFrom(this.store$.pipe(select(FilterStoreSelectors.selectFilterState))),
      debounceTime(400),
      switchMap(([_, filterState]) => {
        return this.laptopService.getLaptopsFromServer(filterState).pipe(
          map((laptops: Laptop[]) => LaptopStoreActions.setLaptops({ laptops })),
          catchError(error => of(LaptopStoreActions.setLoadLaptopsError( {error} )))
        );
      })
    )
  );

  getInitialLaptops$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(LaptopStoreActions.loadInitialLaptops),
      switchMap(_ => {
        return this.laptopService.loadInitialLaptops().pipe(
          map((laptops: Laptop[]) => LaptopStoreActions.setLaptops({ laptops })),
          catchError(error => of(LaptopStoreActions.setLoadLaptopsError( {error} )))
        );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private laptopService: LaptopService,
    private store$: Store<State>
  ) {}
}
