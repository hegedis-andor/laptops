export interface State {
  laptopName: string;
  cpuCoresCounts: string[];
  displayResolutions: string[];
  cpuProducers: string[];
  dedicatedGpu: string;
  minPrice: number;
  maxPrice: number;
}

export const initialState: State = {
  laptopName: '',
  cpuCoresCounts: [],
  displayResolutions: [],
  cpuProducers: [],
  dedicatedGpu: 'All',
  minPrice: 0,
  maxPrice: 7000
};
