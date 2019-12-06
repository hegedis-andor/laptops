import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Laptop } from '../core/models/laptop.model';

@Injectable()
export class LaptopService {
   readonly apiBaseUrl = 'http://127.0.0.1:3000/api/v1';

  constructor(private http: HttpClient) {}

  public getLaptopsFromServer(filters): Observable<Laptop[]> {
    const params = new HttpParams()
      .append('name', filters.laptopName)
      .append('displayResolutions', filters.displayResolutions)
      .append('cpuCoresCounts', filters.cpuCoresCounts)
      .append('cpuProducers', filters.cpuProducers)
      .append('dedicatedGpu', filters.dedicatedGpu)
      .append('minPrice', filters.minPrice)
      .append('maxPrice', filters.maxPrice);

    return this.http.get<Laptop[]>(`${this.apiBaseUrl}/laptops`, { params });
  }

  public loadInitialLaptops() {
    // magic strings (sortBy, launchDate, limit, 8)
    const params = new HttpParams().append('sortBy', 'launchDate').append('limit', '8');
    return this.http.get<Laptop[]>(`${this.apiBaseUrl}/newest/laptops`, { params });
  }
}
