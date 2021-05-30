import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { NowWeatherData, WeatherForecastData } from '../interface/weather-data.interface';
import { Connection } from '../model/connection';
import { WeatherService } from '../model/weather.service';

@Injectable({
  providedIn: 'root',
})
export class WeatherForecastService extends WeatherService<WeatherForecastData> {
  protected readonly url = environment.urlWeatherForecast;
  constructor(protected readonly connection: Connection) {
    super();
  }
}