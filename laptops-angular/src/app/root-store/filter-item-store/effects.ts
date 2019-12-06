import { Injectable } from '@angular/core';


@Injectable()
export class FilterItemStoreEffects {
  /* getFilteredLaptops$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(LaptopStoreActions.loadLaptops),
      withLatestFrom(this.store$.pipe(select(FilterStoreSelectors.selectFilterState))),
      debounceTime(400),
      switchMap(([_, filterState]) => {
        console.log(filterState);
        return this.laptopService.getLaptopsFromServer(filterState).pipe(
          map((laptops: Laptop[]) => LaptopStoreActions.setLaptops({ laptops })),
          catchError(error => of(error))
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
          catchError(error => of(error))
        );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private laptopService: LaptopService,
    private store$: Store<State>
  ) {} */
}
