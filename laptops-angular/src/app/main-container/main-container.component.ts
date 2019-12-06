import { ChangeDetectionStrategy, Component, OnInit, Injector } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Laptop } from '../core/models/laptop.model';
import { LaptopStoreActions, LaptopStoreSelectors, RootStoreState } from '../root-store';
import { ModalService } from '../core/services/modal.service';
import { LAPTOP_IMG_URLS } from '../core/modal/modal.tokens';
import { ImageViewComponent } from '../core/image-view/image-view.component';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainContainerComponent implements OnInit {
  laptops$: Observable<Laptop[]>;
  error$: Observable<any>;

  constructor(
    private store: Store<RootStoreState.State>,
    private modalService: ModalService,
    private componentInjector: Injector
  ) {
    this.store.dispatch(LaptopStoreActions.loadInitialLaptops());
  }

  ngOnInit(): void {
    this.laptops$ = this.store.pipe(select(LaptopStoreSelectors.selectLaptops));
    this.error$ = this.store.pipe(select(LaptopStoreSelectors.selectLaptopError));
  }

  openImageModal(imageUrls: string[]) {
    const injector = Injector.create({
      providers: [{ provide: LAPTOP_IMG_URLS, useValue: imageUrls}],
      parent: this.componentInjector
    });

    this.modalService.openModal(ImageViewComponent, injector);
  }
}
