import { FilterItemStoreSelectors, FilterItemStoreState } from '.';

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

      expect(FilterItemStoreSelectors.selectFilterItemState.projector(state)).toEqual(state);
    });
  });

});
