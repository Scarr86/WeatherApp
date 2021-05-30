import { Route } from '@angular/compiler/src/core';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Place } from 'src/app/interface/place.interface';
import { PlaceByName } from 'src/app/model/place';
import { State } from 'src/app/model/weather.store';
import { NowWeatherStore } from 'src/app/store/now-weather.store';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
  //   changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WeatherComponent implements OnInit, OnDestroy {
  isGhost: any;
  sub: Subscription;
  sity: string = 'Выберите';
  @Input() set place(p: Place | null) {
    p && p.accept(this.nws);
  }
  constructor(public nws: NowWeatherStore,) {
    // this.sub = nws.loading$.subscribe((l) => (this.isGhost = l));
    this.place = new PlaceByName('Новосибирск');
    this.sub = nws.state$.subscribe((state) => {
      this.isGhost = state.loading;
      this.sity = state.payload?.name ?? 'Выберите';
    });
  }

  ngOnInit(): void {
    this.place = new PlaceByName('Новосибирск');
  }
 
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
