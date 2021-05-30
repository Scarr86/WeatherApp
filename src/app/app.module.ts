import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherCardComponent } from './components/weather-card/weather-card.component';
import { Connection } from './model/connection';
import { HttpService } from './service/http.service';
import { WeatherDetailComponent } from './components/weather-detail/weather-detail.component';
import { WeatherComponent } from './components/weather/weather.component';
import { WeatherDetailItemComponent } from './components/weather-detail-item/weather-detail-item.component';
import { httpInterceptorProviders } from './http-interceptor';
import { GhostDirective } from './ghost.directive';
import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru';
import { SelectComponent } from './ui/select/select.component';

// registerLocaleData(localeRu, 'ru');

@NgModule({
  declarations: [
    AppComponent,
    WeatherCardComponent,
    WeatherDetailComponent,
    WeatherComponent,
    WeatherDetailItemComponent,
    GhostDirective,
    SelectComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [
    { provide: Connection, useClass: HttpService },
    // { provide: LOCALE_ID, useValue: 'ru' },
    httpInterceptorProviders,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
