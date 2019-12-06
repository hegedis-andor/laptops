import { ComponentType, Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable, Injector } from '@angular/core';

import { SelectContainerComponent } from './select-container/select-container.component';
import { DROPDOWN_CONTENT } from './select-option.tokens';

@Injectable()
export class DropdownService {
  overlayRef: OverlayRef;
  htmlElement: HTMLElement;

  constructor(private overlay: Overlay) {}

  openDropdown<T>(htmlElement: HTMLElement, componentType?: ComponentType<T>, injector?: Injector) {
    this.htmlElement = htmlElement;
    this.overlayRef = this.createOverlay();

    const inj = Injector.create({
      providers: [{ provide: DROPDOWN_CONTENT, useValue: componentType }],
      parent: injector
    });

    const dropdownPortal = new ComponentPortal(SelectContainerComponent, null, inj);
    this.overlayRef.attach(dropdownPortal);
    this.syncWidth();

    this.overlayRef.backdropClick().subscribe(_ => this.dispose());
  }

  public syncWidth() {
    if (!this.overlayRef) {
      return;
    }

    const refRect = this.htmlElement.getBoundingClientRect();
    this.overlayRef.updateSize({ width: refRect.width });
  }

  private createOverlay(): OverlayRef {
    const overlayConfig = this.getOverlayConfig();
    return this.overlay.create(overlayConfig);
  }

  private getOverlayConfig(): OverlayConfig {
    const positionStrategy = this.overlay
      .position()
      .flexibleConnectedTo(this.htmlElement)
      .withPush(false)
      .withPositions([
        {
          originX: 'start',
          originY: 'bottom',
          overlayX: 'start',
          overlayY: 'top'
        },
        {
          originX: 'start',
          originY: 'top',
          overlayX: 'start',
          overlayY: 'bottom'
        }
      ]);
    return new OverlayConfig({
      scrollStrategy: this.overlay.scrollStrategies.reposition(),
      positionStrategy,
      hasBackdrop: true,
      backdropClass: 'cdk-overlay-transparent-backdrop'
    });
  }

  private dispose(): void {
    if (this.overlayRef) {
      this.overlayRef.dispose();
      this.overlayRef = null;
    }
  }
}
