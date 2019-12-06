import { Component, OnInit, Inject, ChangeDetectionStrategy } from '@angular/core';
import { Portal, ComponentPortal } from '@angular/cdk/portal';
import { DROPDOWN_CONTENT } from '../select-option.tokens';

@Component({
  selector: 'app-select-container',
  templateUrl: './select-container.component.html',
  styleUrls: ['./select-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectContainerComponent implements OnInit {
  portal: Portal<any>;

  constructor(@Inject(DROPDOWN_CONTENT) dropdownContent) {
    this.portal = new ComponentPortal(dropdownContent);
  }
  ngOnInit() {}
}
