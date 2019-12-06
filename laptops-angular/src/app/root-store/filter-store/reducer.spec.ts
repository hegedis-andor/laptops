import { FilterStoreState, FilterStoreReducers, FilterStoreActions } from '.';

describe('FilterStoreReducer', () => {
  describe('undefined action', () => {
    it('should return initialstate when action is undefined', () => {
      const { initialState } = FilterStoreState;
      const action = { type: undefined };
      const state = FilterStoreReducers.filterReducer(undefined, action);
      expect(state).toBe(initialState);
    });

    it('should set laptopName in store', () => {
      const { initialState } = FilterStoreState;
      const laptopName = 'testLaptopName';
      const action = FilterStoreActions.setLaptopName({ laptopName });
      const state = FilterStoreReducers.filterReducer(undefined, action);
      expect(state).toEqual({ ...initialState, laptopName });
    });

    it('should set cpuCoresCounts in store', () => {
      const { initialState } = FilterStoreState;
      const cpuCoresCounts = ['1', '2'];
      const action = FilterStoreActions.setCpuCoresCounts({ cpuCoresCounts });
      const state = FilterStoreReducers.filterReducer(undefined, action);
      expect(state).toEqual({ ...initialState, cpuCoresCounts });
    });

    it('should set displayResolutions in store', () => {
      const { initialState } = FilterStoreState;
      const displayResolutions = ['res x 1', 'res x 2'];
      const action = FilterStoreActions.setDisplayResolutions({ displayResolutions });
      const state = FilterStoreReducers.filterReducer(undefined, action);
      expect(state).toEqual({ ...initialState, displayResolutions });
    });

    it('should set cpuProducers in store', () => {
      const { initialState } = FilterStoreState;
      const cpuProducers = ['prod1', 'prod2'];
      const action = FilterStoreActions.setCpuProducers({ cpuProducers });
      const state = FilterStoreReducers.filterReducer(undefined, action);
      expect(state).toEqual({ ...initialState, cpuProducers });
    });

    it('should set dedicatedGpu in store', () => {
      const { initialState } = FilterStoreState;
      const dedicatedGpu = 'whatever';
      const action = FilterStoreActions.setDedicatedGpu({ dedicatedGpu });
      const state = FilterStoreReducers.filterReducer(undefined, action);
      expect(state).toEqual({ ...initialState, dedicatedGpu });
    });

    it('should set minPrice in store', () => {
      const { initialState } = FilterStoreState;
      const minPrice = -1000;
      const action = FilterStoreActions.setMinPrice({ minPrice });
      const state = FilterStoreReducers.filterReducer(undefined, action);
      expect(state).toEqual({ ...initialState, minPrice });
    });

    it('should set maxPrice in store', () => {
      const { initialState } = FilterStoreState;
      const maxPrice = 999;
      const action = FilterStoreActions.setMaxPrice({ maxPrice });
      const state = FilterStoreReducers.filterReducer(undefined, action);
      expect(state).toEqual({ ...initialState, maxPrice });
    });
  });
});
