import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import { Place } from 'src/app/interface/place.interface';
import { PlaceByCoord, PlaceByID, PlaceByName } from 'src/app/model/place';
import { PlaceStore } from 'src/app/model/place.store';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectComponent implements OnInit {
  isOpen: boolean = false;

  cities = ['Москва', 'Новосибирск', 'Лондон', 'Париж', 'Нью-Йорк'];
  city: string = 'Выберите';
  selectIndex: number = -1;
  @Output() place = new EventEmitter<Place>();

  constructor(public ps: PlaceStore) {
    ps.places$.subscribe(console.log);
    ps.getPlace();
    ps.addPlace(new PlaceByName('Новосибирск'));
    ps.addPlace(new PlaceByID(42));
    ps.addPlace(new PlaceByCoord({ lat: 10, lon: 33 }));
  }

  ngOnInit(): void {}

  toggle() {
    this.isOpen = !this.isOpen;
  }
  open() {
    this.isOpen = true;
  }
  close() {
    this.isOpen = false;
  }
  select(index: number) {
    this.city = this.cities[index];
    this.selectIndex = index;
    this.close();
    this.place.emit(new PlaceByName(this.city));
  }
}
