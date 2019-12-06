import { FilterStoreState, FilterStoreSelectors } from '.';

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

    expect(FilterStoreSelectors.selectFilterState.projector(state)).toEqual(state);
  });
});
