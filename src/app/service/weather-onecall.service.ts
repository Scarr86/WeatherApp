import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {
  NowWeatherData,
  WeatherOnecallData,
} from '../interface/weather-data.interface';
import { Connection } from '../model/connection';
import { WeatherService } from '../model/weather.service';

@Injectable({
  providedIn: 'root',
})
export class WeatherOnecallService extends WeatherService<WeatherOnecallData> {
  protected readonly url = environment.urlWeatherForecastOnecall;
  constructor(protected readonly connection: Connection) {
    super();
    this.defReqestParams = { ...this.defReqestParams, exclude: '' };
  }
}
