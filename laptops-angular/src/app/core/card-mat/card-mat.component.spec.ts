import { OverlayModule } from '@angular/cdk/overlay';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';

import { CardMatComponent } from './card-mat.component';

describe('CardMatComponent', () => {
  let component: CardMatComponent;
  let fixture: ComponentFixture<CardMatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CardMatComponent],
      imports: [MatCardModule, OverlayModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardMatComponent);
    component = fixture.componentInstance;
    const laptop = {
      name: 'name',
      cpu: {
        cores: '1',
        model: 'model',
        prod: 'prod'
      },
      display: {
        resolution: '1 x 2',
        size: '15',
        touch: 'no',
        type: 'type'
      },
      gpu: {
        model: 'model',
        prod: 'prode'
      },
      id: 1,
      imgUrls: ['1', '2'],
      launchDate: '2000-01-01',
      price: '100',
      primary_storage: {
        cap: '100',
        model: 'model'
      },
      ram: {
        type: 'type',
        size: '1000',
        speed: '3000'
      },
      thumbnailUrl: 'url'
    };

    component.laptop = laptop;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('clickOnImage', () => {
    it('should emit image urls of laptop when #clickOnImage', () => {
      spyOn(component.imageClicked, 'emit');
      component.clickOnImage(['url1', 'url2']);
      expect(component.imageClicked.emit).toHaveBeenCalledWith(['url1', 'url2']);
    });
  });
});
