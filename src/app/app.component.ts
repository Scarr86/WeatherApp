import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Place } from './interface/place.interface';
import {
  NowWeatherData,
  WeatherOnecallData,
} from './interface/weather-data.interface';
import { PlaceByCoord, PlaceByName } from './model/place';
import { WeatherStore } from './model/weather.store';
import { NowWeatherStore } from './store/now-weather.store';
import { WeatherForecastStore } from './store/weather-forecat.store';
import { WeatherOnecallStore } from './store/weather-onecall.store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  //   changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  title = 'weather';
  ws: WeatherStore<any>;
  //   state$;
  //   place: Place | null = null;
  place: Place | null = new PlaceByName('Новосибирск');
  constructor(
    public nws: NowWeatherStore,
    public wfcs: WeatherForecastStore,
    public wocs: WeatherOnecallStore
  ) {
    //this.ws$ = this.nws.weatherData$;
    // this.state$ = nws.state$;
    this.ws = this.nws;
    // debugger
    // this.ws.state$.subscribe((s) => console.log(s));
    // this.ws.state$.subscribe((s) => console.log(s));
    // this.ws.state$.subscribe((s) => console.log(s));
    // this.ws.state$.subscribe((s) => console.log(s));
    // this.ws = this.wfcs;
    // this.ws = this.wocs;
  }
  ngOnInit() {
    //console.log(this);
    //this.ws.state$.subscribe(console.log);
  }

  onNowWeather(name: string) {
    // new PlaceByName(name)
    //   .accept<NowWeatherData>(this.nws)
    //   .pipe(
    //     switchMap((wd) =>
    //       new PlaceByCoord(wd.coord).accept<WeatherOnecallData>(this.wocs)
    //     )
    //   )
    //   .subscribe();
    // new PlaceByName(name).accept(this.wfcs);

    // new PlaceByName(name).accept(this.wocs);
    this.place = new PlaceByName(name);
    this.place.accept<NowWeatherData>(this.nws);
  }
}
