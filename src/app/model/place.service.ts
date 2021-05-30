import { Injectable } from '@angular/core';
import { Place } from '../interface/place.interface';
import { PlaceByCoord, PlaceByID, PlaceByName, PlaceType } from './place';

// function isType<T>(place: any): place is T {
//   return place instanceof T;
// }

function isPlaceByName(place: Place): place is PlaceByName {
  return place instanceof PlaceByName;
}
function isPlaceByID(place: Place): place is PlaceByID {
  return place instanceof PlaceByID;
}
function isPlaceByCoord(place: Place): place is PlaceByCoord {
  return place instanceof PlaceByCoord;
}

export interface PlaceStoreItem {
  id: number;
  place: PlaceType | null;
}

@Injectable({
  providedIn: 'root',
})
export class PlaceService {
  //serialize: SerializerPlace = new SerializerPlace();
  constructor(private serializer: SerializerPlace) {}
  addPlces(places: PlaceStoreItem[] | null) {
    sessionStorage.setItem(
      'places',
      JSON.stringify(places, (k, v) => {
        return k === 'place' ? this.serializer.serialize(v) : v;
      })
    );
  }
  getPlces(): PlaceStoreItem[] | null {
    let placeString: string | null = sessionStorage.getItem('places');
    if (!placeString) return null;
    else {
      return JSON.parse(placeString, (k, v) => {
        return k === 'place' ? this.serializer.deserialize(v) : v;
      });
    }
  }
  addSelected(place: PlaceType | null) {
    sessionStorage.setItem('selected', this.serializer.serialize(place));
  }
  getSelected(): PlaceType | null {
    let str = sessionStorage.getItem('selected');
    if (str === null || str === '') {
      return null;
    } else {
      return this.serializer.deserialize(str);
    }
  }
}
@Injectable({
  providedIn: 'root',
})
export class SerializerPlace {
  serialize(place: PlaceType | null) {
    let str;
    if (place === null) str = JSON.stringify(place);
    else if (isPlaceByName(place)) {
      str = JSON.stringify({ type: 1, data: place.name });
    } else if (isPlaceByID(place)) {
      str = JSON.stringify({ type: 2, data: place.ID });
    } else if (isPlaceByCoord(place)) {
      str = JSON.stringify({ type: 3, data: place.coord });
    } else {
      throw new ErrorEvent(' Do not  know type for serialize');
    }

    return str;
  }
  deserialize(placeString: string | null) {
    if (placeString === null) return null;
    let object: { type: number; data: any } = JSON.parse(placeString);
    let place: PlaceType;
    switch (object.type) {
      case 1:
        place = new PlaceByName(object.data);
        break;
      case 2:
        place = new PlaceByID(object.data);
        break;
      case 3:
        place = new PlaceByCoord(object.data);
        break;
      default:
        throw new ErrorEvent('Do not know type for deserialize');
        break;
    }
    return place;
  }
}
