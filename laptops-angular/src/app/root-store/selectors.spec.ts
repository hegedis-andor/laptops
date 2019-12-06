import { RootStoreSelectors } from '.';
import { Laptop } from '../core/models/laptop.model';
import { FilterItemStoreState } from './filter-item-store';
import { FilterStoreState } from './filter-store';

describe('RootStore Selectors', () => {
  describe('FilterItemtore Selector', () => {
    it('should return FilterItemStoreState', () => {
      const state: FilterItemStoreState.State = {
        cpuCoresDropdownItems: ['2', '4'],
        displayResolutionDropdownItems: ['1366 x 768', '1600 x 900'],
        cpuProducersCheckboxItems: ['Intel'],
        dedicatedGpuRadioButtonOptions: ['Yes', 'No'],
        sliderMinPrice: -10,
        sliderMaxPrice: 1000
      };

      expect(RootStoreSelectors.selectFilterItems.projector(state)).toEqual(state);
    });
  });

  describe('FilterStore Selector', () => {
    it('should return FilterStoreState', () => {
      const state: FilterStoreState.State = {
        cpuCoresCounts: ['2'],
        cpuProducers: ['Prod1', 'Prod2'],
        dedicatedGpu: 'Yes',
        displayResolutions: ['0 x 1', ' 1 x 2'],
        laptopName: 'TestName',
        maxPrice: 100,
        minPrice: -10
      };

      expect(RootStoreSelectors.selectFilters.projector(state)).toEqual(state);
    });
  });

  describe('LaptopStore Selector', () => {
    it('should return laptops from LaptopStoreState', () => {
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

      expect(RootStoreSelectors.selectLaptops.projector(laptops)).toEqual(laptops);
    });
  });
});
