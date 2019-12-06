import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostListener,
  Injector,
  Input,
  OnDestroy,
  OnInit,
  Output
} from '@angular/core';
import { Subject, Subscription } from 'rxjs';

import { DropdownService } from '../dropdown.service';
import { MULTI_SELECT_DATA } from '../select-option.tokens';
import { SelectOptionsComponent } from '../select-options/select-options.component';
import { MultiSelectData } from '../multi-select-data.model';

@Component({
  selector: 'app-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.scss'],
  providers: [DropdownService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MultiSelectComponent implements OnInit, OnDestroy {
  @Input() placeholder = '';
  @Input() options: string[];
  @Output() selectionChanged = new EventEmitter<string[]>();

  subject = new Subject<string[]>();
  subscription: Subscription;
  selectedOptions: string[] = [];
  isThereSelected: boolean;

  constructor(private dropdownService: DropdownService, private injector: Injector) {}

  ngOnInit(): void {
    this.subscription = this.subject.subscribe(selections => {
      this.selectedOptions = selections;
      this.isThereSelected = selections.length > 0 ? true : false;

      this.selectionChanged.emit(selections);
    });
  }

  openDropDown(parentReference: HTMLElement) {
    const multiSelectData: MultiSelectData = {
      selectionChange: (args: string[]) => this.subject.next(args),
      options: this.options,
      selectedOptions: this.selectedOptions
    };
    const inj = this.createInjector(multiSelectData, this.injector);

    this.dropdownService.openDropdown(parentReference, SelectOptionsComponent, inj);
  }

  private createInjector(multiSelectData: MultiSelectData, parentInjector: Injector): Injector {
    const injector = Injector.create({
      providers: [{ provide: MULTI_SELECT_DATA, useValue: multiSelectData }],
      parent: parentInjector
    });
    return injector;
  }

  @HostListener('window:resize')
  onResize() {
    this.dropdownService.syncWidth();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
