import { LaptopStoreState, LaptopStoreReducer, LaptopStoreActions } from '.';
import { Laptop } from 'src/app/core/models/laptop.model';

describe('FilterStoreReducer', () => {
  describe('undefined action', () => {
    it('should return initialstate when action is undefined', () => {
      const { initialState } = LaptopStoreState;
      const action = { type: undefined };
      const state = LaptopStoreReducer.laptopReducer(undefined, action);
      expect(state).toBe(initialState);
    });

    it('should set error in store', () => {
      const { initialState } = LaptopStoreState;
      const error = 'error';
      const action = LaptopStoreActions.setLoadLaptopsError({ error });
      const state = LaptopStoreReducer.laptopReducer(undefined, action);
      expect(state).toEqual({ ...initialState, error });
    });

    it('should set laptops in store', () => {
      const { initialState } = LaptopStoreState;
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
        }
      ];
      const action = LaptopStoreActions.setLaptops({ laptops });
      const state = LaptopStoreReducer.laptopReducer(undefined, action);
      expect(state).toEqual({ ...initialState, laptops });
    });
  });
});
