import { Observable } from "rxjs";
import { Place } from "../interface/place.interface";
import { Visitor } from "../interface/visitor.interface";


export type PlaceType = PlaceByName | PlaceByCoord | PlaceByID;

export class PlaceByName implements Place {
  constructor(public readonly name: string) {}
  accept<T>(visitor: Visitor<T>): Observable<T> {
    return visitor.visitByName(this.name);
  }
}

export class PlaceByCoord implements Place {
  constructor(public readonly coord: { lat: number; lon: number }) {}
  accept<T>(visitor: Visitor<T>): Observable<T> {
   return visitor.visitByCoords(this.coord);
  }
}

export class PlaceByID implements Place {
	constructor(public readonly ID: number ) {}
	accept<T>(visitor: Visitor<T>): Observable<T> {
	  return visitor.visitByID(this.ID);
	}
  }
