import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { NowWeatherData } from '../interface/weather-data.interface';
import { Connection } from '../model/connection';
import { WeatherService } from '../model/weather.service';

@Injectable({
  providedIn: 'root',
})
export class NowWeatherService extends WeatherService<NowWeatherData> {
  protected readonly url = environment.urlNowWeather;
  constructor(protected readonly connection: Connection) {
    super();
  }
}
