import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { cold, hot } from 'jasmine-marbles';
import { Observable, of, throwError } from 'rxjs';
import { Laptop } from 'src/app/core/models/laptop.model';
import { LaptopService } from 'src/app/services/laptop.service';

import { LaptopStoreActions } from '.';
import { FilterStoreSelectors } from '../filter-store';
import { LaptopStoreEffects } from './effects';
import { first } from 'rxjs/operators';

describe('LaptopStore Effects', () => {
  const laptops: Laptop[] = [
    {
      name: 'name',
      cpu: {
        cores: '1',
        model: 'model',
        prod: 'prod'
      },
      display: {
        resolution: '1 x 2',
        size: '15',
        touch: 'no',
        type: 'type'
      },
      gpu: {
        model: 'model',
        prod: 'prode'
      },
      id: 1,
      imgUrls: ['1', '2'],
      launchDate: '2000-01-01',
      price: '100',
      primary_storage: {
        cap: '100',
        model: 'model'
      },
      ram: {
        type: 'type',
        size: '1000',
        speed: '3000'
      },
      thumbnailUrl: 'url'
    },
    {
      name: 'name2',
      cpu: {
        cores: '1',
        model: 'model',
        prod: 'prod'
      },
      display: {
        resolution: '1 x 2',
        size: '15',
        touch: 'no',
        type: 'type'
      },
      gpu: {
        model: 'model',
        prod: 'prode'
      },
      id: 2,
      imgUrls: ['2'],
      launchDate: '2000-01-02',
      price: '200',
      primary_storage: {
        cap: '200',
        model: 'model'
      },
      ram: {
        type: 'type',
        size: '2000',
        speed: '6000'
      },
      thumbnailUrl: 'url'
    }
  ];

  let actions$: Observable<Action>;
  let laptopEffects: LaptopStoreEffects;
  let laptopService: jasmine.SpyObj<LaptopService>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        LaptopStoreEffects,
        {
          provide: LaptopService,
          useValue: jasmine.createSpyObj<LaptopService>(['getLaptopsFromServer', 'loadInitialLaptops'])
        },
        provideMockActions(() => actions$),
        provideMockStore({
          selectors: [
            {
              selector: FilterStoreSelectors.selectFilterState,
              value: {}
            }
          ]
        })
      ]
    });

    laptopEffects = TestBed.get(LaptopStoreEffects);
    laptopService = TestBed.get(LaptopService);
  });

  describe('getFilteredLaptops', () => {
    it('should return LaptopStoreActions#setLaptops action with laptops payload, on success', () => {
      actions$ = of(LaptopStoreActions.loadLaptops());

      laptopService.getLaptopsFromServer.and.returnValue(of(laptops));

      laptopEffects.getFilteredLaptops$
        .subscribe(resultAction => {
          expect(resultAction).toEqual(LaptopStoreActions.setLaptops({ laptops }));
        })
        .unsubscribe();
    });

    it('should return LaptopStoreActions#setLoadLaptopsError action with error payload, on failure', () => {
      actions$ = of(LaptopStoreActions.loadLaptops());

      laptopService.getLaptopsFromServer.and.returnValue(throwError('error'));

      laptopEffects.getFilteredLaptops$
        .subscribe(resultAction => {
          expect(resultAction).toEqual(LaptopStoreActions.setLoadLaptopsError({ error: 'error' }));
        })
        .unsubscribe();
    });
  });

  describe('#getInitialLaptops', () => {
    const action = LaptopStoreActions.loadInitialLaptops();

    it('should return LaptopStoreActions#setLaptops action with laptops payload, on success', () => {
      laptopService.loadInitialLaptops.and.returnValue(cold('-l|', { l: laptops }));
      actions$ = hot('-a', { a: action });

      const completion = LaptopStoreActions.setLaptops({ laptops });
      const expected = cold('--c', { c: completion });

      expect(laptopEffects.getInitialLaptops$).toBeObservable(expected);
    });

    it('should return LaptopStoreActions#setLoadLaptopsError action with error payload, on failure', () => {
      actions$ = of(action);

      laptopService.loadInitialLaptops.and.returnValue(throwError('error'));

      let resultAction: Action;
      laptopEffects.getInitialLaptops$.pipe(first()).subscribe(notification => (resultAction = notification));

      expect(resultAction).toEqual(LaptopStoreActions.setLoadLaptopsError({ error: 'error' }));
    });
  });
});
