import { Injectable } from '@angular/core';
import { WeatherOnecallData } from '../interface/weather-data.interface';
import { WeatherStore } from '../model/weather.store';
import { WeatherOnecallService } from '../service/weather-onecall.service';

@Injectable({
  providedIn: 'root',
})
export class WeatherOnecallStore extends WeatherStore<WeatherOnecallData> {
  constructor(protected ws: WeatherOnecallService) {
    super();
  }
}
