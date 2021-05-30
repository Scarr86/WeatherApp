import { TestBed } from '@angular/core/testing';

import { NowWeatherService } from './now-weather.service';

describe('NowWeatherService', () => {
  let service: NowWeatherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NowWeatherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
