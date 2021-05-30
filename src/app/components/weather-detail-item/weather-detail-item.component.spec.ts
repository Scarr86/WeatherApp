import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherDetailItemComponent } from './weather-detail-item.component';

describe('WeatherDetailItemComponent', () => {
  let component: WeatherDetailItemComponent;
  let fixture: ComponentFixture<WeatherDetailItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherDetailItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherDetailItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
