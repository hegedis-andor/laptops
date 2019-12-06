import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageViewComponent } from './image-view.component';
import { LAPTOP_IMG_URLS } from '../modal/modal.tokens';

describe('ImageViewComponent', () => {
  let component: ImageViewComponent;
  let fixture: ComponentFixture<ImageViewComponent>;

  beforeEach(async(() => {
    const mockUrls = ['url1', 'url2', 'url3'];
    TestBed.configureTestingModule({
      declarations: [ImageViewComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [{ provide: LAPTOP_IMG_URLS, useValue: mockUrls }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('prevImage', () => {
    it('should decrease the index value by 1 if index is greater than 0', () => {
      component.imageUrls = ['url1', 'url2', 'url3', 'url4'];
      component.index = 2;
      component.prevImage();
      expect(component.index).toBe(1);
      expect(component.currentImage).toBe('url2');
    });

    it('should set the index value to imageUrls.length + index, if index is lesser than 1 ', () => {
      component.imageUrls = ['url1', 'url2', 'url3', 'url4'];
      component.index = 0;
      component.prevImage();
      expect(component.index).toBe(3);
      expect(component.currentImage).toBe('url4');
    });
  });

  describe('nextImage', () => {
    it('should increase the index value by 1 if index is smaller than the length of imageUrls', () => {
      component.imageUrls = ['url1', 'url2', 'url3', 'url4'];
      component.index = 1;
      component.nextImage();
      expect(component.index).toBe(2);
      expect(component.currentImage).toBe('url3');
    });

    it('should increase index by 1 and set index to (index mod imageUrls.length) if index greater than imageUrls.length - 1', () => {
      component.imageUrls = ['url1', 'url2', 'url3', 'url4'];
      component.index = 3;
      component.nextImage();
      expect(component.index).toBe(0);
      expect(component.currentImage).toBe('url1');
    });
  });

  describe('openImage', () => {
    it('should set the currentImage to the image that is indexed by the number that it received', () => {
      component.imageUrls = ['url1', 'url2', 'url3', 'url4'];
      component.openImage(0);
      expect(component.currentImage).toBe('url1');

      component.openImage(1);
      expect(component.currentImage).toBe('url2');

      component.openImage(3);
      expect(component.currentImage).toBe('url4');
    });
  });
});
