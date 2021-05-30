import { Injectable } from "@angular/core";
import { NowWeatherData } from "../interface/weather-data.interface";
import { WeatherService } from "../model/weather.service";
import { WeatherStore } from "../model/weather.store";
import { NowWeatherService } from "../service/now-weather.service";

@Injectable({
	providedIn: 'root',
  })
  export class NowWeatherStore extends WeatherStore<NowWeatherData> {
	constructor(protected ws: NowWeatherService) {
	  super();
	  console.log("NowWeatherStore CREATE")
	}
  }