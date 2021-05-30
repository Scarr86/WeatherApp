import { Component, Input, OnInit } from '@angular/core';

export interface TempData {
  temp: number;
  time: number;
  select: boolean;
}

@Component({
  selector: 'app-weather-detail-item',
  templateUrl: './weather-detail-item.component.html',
  styleUrls: ['./weather-detail-item.component.scss'],
})
export class WeatherDetailItemComponent implements OnInit {
  @Input() temp: TempData = {
    temp: 0,
    time: 0,
    select: false,
  };
  constructor() {}
  isSelect(){
	  return true
  }

  ngOnInit(): void {}
}
