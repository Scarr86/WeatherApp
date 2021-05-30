import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Place } from '../interface/place.interface';
import { PlaceType } from './place';
import { PlaceService, PlaceStoreItem } from './place.service';

export interface PlaceState {
  loading: boolean;
  selected: Place | null;
  places: PlaceStoreItem[] | null;
}
const defState: PlaceState = {
  loading: true,
  selected: null,
  places: null,
};

@Injectable({
  providedIn: 'root',
})
export class PlaceStore {
  private state = new BehaviorSubject(defState);

  constructor(private ps: PlaceService) {}
  get selected$() {
    return this.state.pipe(map((state) => state.selected));
  }
  get loading$() {
    return this.state.pipe(map((state) => state.loading));
  }
  get places$() {
    return this.state.pipe(map((state) => state.places));
  }

  getPlace() {
    this.state.next({ ...this.state.getValue(), places: this.ps.getPlces() });
  }
  addPlace(place: PlaceType) {
    let places = this.state.getValue().places;
    if (!places) {
      this.state.next({
        ...this.state.getValue(),
        places: [{ id: 11, place }],
      });
      this.ps.addPlces(this.state.getValue().places);
    } else {
      let newPlaces = places.map((p) => p);
      newPlaces.push({
        id: Math.max(...places.map((p) => p.id)) + 1,
        place,
      }),
        this.state.next({
          ...this.state.getValue(),
          places: newPlaces,
        });
      this.ps.addPlces(this.state.getValue().places);
    }
  }
}
