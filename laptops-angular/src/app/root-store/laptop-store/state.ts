import { Laptop } from 'src/app/core/models/laptop.model';

export interface State {
  error: any;
  laptops: Laptop[];
}

export const initialState: State = {
  error: null,
  laptops: []
};
