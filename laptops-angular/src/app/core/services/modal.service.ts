import { Injectable, Injector } from '@angular/core';
import { Overlay, ComponentType, OverlayRef, OverlayConfig } from '@angular/cdk/overlay';
import { POPUP_DATA_COMPONENT } from '../modal/modal.tokens';
import { ComponentPortal } from '@angular/cdk/portal';
import { PopupComponent } from '../modal/popup/popup.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  overlayRef: OverlayRef;

  constructor(private overlay: Overlay) {}

  openModal<T>(componentType: ComponentType<T>, componentInjector: Injector) {
    const overlayConfig = this.getOverlayConfig();
    this.overlayRef = this.overlay.create(overlayConfig);

    const injector = Injector.create({
      providers: [{ provide: POPUP_DATA_COMPONENT, useValue: componentType }],
      parent: componentInjector
    });

    const popupPortal = new ComponentPortal(PopupComponent, null, injector);
    this.overlayRef.attach(popupPortal);

    this.overlayRef.backdropClick().subscribe(_ => this.dispose());
  }

  private getOverlayConfig(): OverlayConfig {
    const positionStrategy = this.overlay
      .position()
      .global()
      .centerHorizontally()
      .centerVertically();

    const overlayConfig = new OverlayConfig({
      backdropClass: 'backdrop',
      hasBackdrop: true,
      scrollStrategy: this.overlay.scrollStrategies.block(),
      positionStrategy
    });

    return overlayConfig;
  }

  private dispose() {
    if (this.overlayRef) {
      this.overlayRef.dispose();
      this.overlayRef = null;
    }
  }
}
