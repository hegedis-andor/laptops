import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { LaptopService } from './laptop.service';

describe('LaptopService', () => {
  let httpTestingController: HttpTestingController;
  let laptopService: LaptopService;
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

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [LaptopService]
    });

    laptopService = TestBed.get(LaptopService);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(laptopService).toBeTruthy();
  });

  describe('#getLaptopsFromServer', () => {
    it('should send GET request with params', () => {
      const mockFilterState = {
        laptopName: 'laptopName',
        displayResolutions: ['1920 x 1080'],
        cpuCoresCounts: ['2'],
        cpuProducers: ['Intel'],
        dedicatedGpu: 'All',
        minPrice: 0,
        maxPrice: 7000
      };

      laptopService.getLaptopsFromServer(mockFilterState).subscribe();

      httpTestingController.match(request => {
        const urlWithParams =
          `${laptopService.apiBaseUrl}/laptops?` +
          Object.keys(mockFilterState)
            .map(key => {
              if (key === 'laptopName') {
                return `name=${encodeURIComponent(mockFilterState[key])}`;
              }
              return `${key}=${encodeURIComponent(mockFilterState[key])}`;
            })
            .join('&');

        return (
          request.url === `${laptopService.apiBaseUrl}/laptops` &&
          request.urlWithParams === urlWithParams &&
          request.method === 'GET'
        );
      });
    });
  });

  describe('#loadInitialLaptops', () => {
    it('should send GET request with params', () => {
      laptopService.loadInitialLaptops().subscribe();

      httpTestingController.match(request => {
        const urlWithParams = `${laptopService.apiBaseUrl}/newest/laptops?sortBy=launchDate&limit=8`;

        return (
          request.url === `${laptopService.apiBaseUrl}/newest/laptops` &&
          request.urlWithParams === urlWithParams &&
          request.method === 'GET'
        );
      });
    });
  });
});
