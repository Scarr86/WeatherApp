import { Injectable } from '@angular/core';
import { WeatherForecastData } from '../interface/weather-data.interface';
import { WeatherStore } from '../model/weather.store';
import { WeatherForecastService } from '../service/weather-forecast.service';

@Injectable({
  providedIn: 'root',
})
export class WeatherForecastStore extends WeatherStore<WeatherForecastData> {
  constructor(protected ws: WeatherForecastService) {
    super();
  }
}
