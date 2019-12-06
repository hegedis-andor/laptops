export interface State {
  cpuCoresDropdownItems: string[];
  displayResolutionDropdownItems: string[];
  cpuProducersCheckboxItems: string[];
  dedicatedGpuRadioButtonOptions: string[];
  sliderMaxPrice: number;
  sliderMinPrice: number;
}

export const initialState: State = {
  cpuCoresDropdownItems: ['2', '4', '6', '8'],
  displayResolutionDropdownItems: [
    '1366 x 768',
    '1600 x 900',
    '1920 x 1080',
    '1920 x 1200',
    '2160 x 1440',
    '2560 x 1600',
    '3000 x 2000',
    '3840 x 2160'
  ],
  cpuProducersCheckboxItems: ['Intel', 'Amd'],
  dedicatedGpuRadioButtonOptions: ['Yes', 'No', 'All'],
  sliderMinPrice: 10,
  sliderMaxPrice: 7000
};
