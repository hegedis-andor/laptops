import { FilterItemStoreState, FilterItemStoreReducers, FilterItemStoreActions } from '.';

describe('FilterItemStoreReducer', () => {
  describe('undefined action', () => {
    it('should return initialstate when action is undefined', () => {
      const { initialState } = FilterItemStoreState;
      const action = { type: undefined };
      const state = FilterItemStoreReducers.filterItemReducer(undefined, action);
      expect(state).toBe(initialState);
    });

    it('should set CpuCoresDropdownItems in store', () => {
      const { initialState } = FilterItemStoreState;
      const items = ['dropdownItem1', 'dropdownItem2'];
      const action = FilterItemStoreActions.setCpuCoresDropdownItems({ cpuCoresDropdownItems: items });
      const state = FilterItemStoreReducers.filterItemReducer(undefined, action);

      const expected = {
        ...initialState,
        cpuCoresDropdownItems: items
      };
      expect(state).toEqual(expected);
    });

    it('should set displayResolutionDropdownItems in store', () => {
      const { initialState } = FilterItemStoreState;
      const resolutions = ['res x 1', 'res x2'];
      const action = FilterItemStoreActions.setDisplayResolutionDropdownItems({
        displayResolutionDropdownItems: resolutions
      });
      const state = FilterItemStoreReducers.filterItemReducer(undefined, action);

      const expected = {
        ...initialState,
        displayResolutionDropdownItems: resolutions
      };
      expect(state).toEqual(expected);
    });

    it('should set cpuProducersCheckboxItems in store', () => {
      const { initialState } = FilterItemStoreState;
      const items = ['item1', 'item2'];
      const action = FilterItemStoreActions.setCpuProducersCheckboxItems({
        cpuProducersCheckboxItems: items
      });
      const state = FilterItemStoreReducers.filterItemReducer(undefined, action);

      const expected = {
        ...initialState,
        cpuProducersCheckboxItems: items
      };
      expect(state).toEqual(expected);
    });

    it('should set DedicatedGpuRadioButtonOptions in store', () => {
      const { initialState } = FilterItemStoreState;
      const options = ['option1', 'option2'];
      const action = FilterItemStoreActions.setDedicatedGpuRadioButtonOptions({
        dedicatedGpuRadioButtonOptions: options
      });
      const state = FilterItemStoreReducers.filterItemReducer(undefined, action);

      const expected = {
        ...initialState,
        dedicatedGpuRadioButtonOptions: options
      };
      expect(state).toEqual(expected);
    });

    it('should set SliderMaxPrice in store', () => {
      const { initialState } = FilterItemStoreState;
      const maxPrice = 1000;
      const action = FilterItemStoreActions.setSliderMaxPrice({
        sliderMaxPrice: maxPrice
      });
      const state = FilterItemStoreReducers.filterItemReducer(undefined, action);

      const expected = {
        ...initialState,
        sliderMaxPrice: maxPrice
      };
      expect(state).toEqual(expected);
    });

    it('should set SliderMinPrice in store', () => {
      const { initialState } = FilterItemStoreState;
      const minPrice = -1000;
      const action = FilterItemStoreActions.setSliderMinPrice({
        sliderMinPrice: minPrice
      });
      const state = FilterItemStoreReducers.filterItemReducer(undefined, action);

      const expected = {
        ...initialState,
        sliderMinPrice: minPrice
      };
      expect(state).toEqual(expected);
    });
  });
});
