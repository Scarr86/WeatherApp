import { Component, OnInit } from '@angular/core';
import { TempData } from '../weather-detail-item/weather-detail-item.component';

@Component({
  selector: 'app-weather-detail',
  templateUrl: './weather-detail.component.html',
  styleUrls: ['./weather-detail.component.scss'],
})
export class WeatherDetailComponent implements OnInit {
  tempData: TempData[] = [];
  date = new Date();
  constructor() {
    this.tempData = Array.from<TempData, TempData>({ length: 8 }, (_, i) => ({
      temp: 24 + i,
      time: (this.date.getHours() - 2 + i) % 24,
      select: this.date.getHours() - 2 + i === this.date.getHours(),
    }));
  }

  ngOnInit(): void {}
}
