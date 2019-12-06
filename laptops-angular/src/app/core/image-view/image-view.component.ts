import { Component, Inject, ChangeDetectionStrategy } from '@angular/core';

import { LAPTOP_IMG_URLS } from '../modal/modal.tokens';

@Component({
  selector: 'app-image-view',
  templateUrl: './image-view.component.html',
  styleUrls: ['./image-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImageViewComponent {
  index: number;
  currentImage: string;

  constructor(@Inject(LAPTOP_IMG_URLS) public imageUrls: string[]) {
    this.index = 0;
    this.currentImage = this.imageUrls[this.index];
  }

  prevImage() {
    this.index -= 1;
    if (this.index < 0) {
      this.index = this.imageUrls.length + this.index;
    }
    this.currentImage = this.imageUrls[this.index];
  }

  nextImage() {
    this.index += 1;
    this.index %= this.imageUrls.length;
    this.currentImage = this.imageUrls[this.index];
  }

  openImage(index: number) {
    this.currentImage = this.imageUrls[index];
  }
}
