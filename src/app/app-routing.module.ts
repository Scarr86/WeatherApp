import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherDetailComponent } from './components/weather-detail/weather-detail.component';
import { WeatherComponent } from './components/weather/weather.component';

// const routes: Routes = [{ path: '', component: WeatherDetailComponent }];
const routes: Routes = [
  { path: '', component: WeatherComponent, pathMatch:'full' },
  { path: 'detail', component: WeatherDetailComponent },
  { path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
