import { Subject } from 'rxjs';

export interface MultiSelectData {
  selectionChange: (args: string[]) => void;
  options: string[];
  selectedOptions: string[];
}
