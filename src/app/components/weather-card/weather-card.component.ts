import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';
import { NowWeatherData } from 'src/app/interface/weather-data.interface';
import { State } from 'src/app/model/weather.store';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WeatherCardComponent implements OnInit {
  today = new Date();
  //   @Input() set weather(w: NowWeatherData | null) {
  //     if (!w) return;
  //     this.temp = w.main.temp;
  //     this.hum = w.main.humidity;
  //     this.wind = w.wind.speed;
  //     this.desc = w.weather[0].description;
  //     this.desc = this.desc.charAt(0).toUpperCase() + this.desc.slice(1);
  //   }

  @Input() set weatherState(s: State<NowWeatherData> | null) {
    if (!s) return;
    this.isGhost = s.loading;
    if (s.loading) return;
    this.temp = s.payload?.main.temp;
    this.hum = s.payload?.main.humidity;
    this.wind = s.payload?.wind.speed;
    this.desc = s.payload?.weather[0].description;
    this.desc =
      this.desc && this.desc.charAt(0).toUpperCase() + this.desc.slice(1);
    this.cdr.detectChanges();
  }
  isGhost: boolean = true;
  temp: number = 0;
  wind = 0;
  hum = 0;
  desc = '';
  //: NowWeatherData | null = null;

  constructor(private cdr: ChangeDetectorRef,  private router: Router) {}

  ngOnInit(): void {}
  goDetail() {
    this.router.navigate(['detail']);
  }
}
