import { Component, OnInit, Inject, ChangeDetectionStrategy } from '@angular/core';
import { Portal, ComponentType, ComponentPortal } from '@angular/cdk/portal';
import { POPUP_DATA_COMPONENT } from '../modal.tokens';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PopupComponent implements OnInit {
  portal: Portal<any>;

  constructor(@Inject(POPUP_DATA_COMPONENT) private popupData: ComponentType<any>) {
    this.portal = new ComponentPortal(this.popupData);
  }

  ngOnInit() {}
}
