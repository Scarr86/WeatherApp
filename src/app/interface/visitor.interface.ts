export interface Visitor<T> {
  visitByName(name: string): any;
  visitByCoords(coords: { lat: number; lon: number }): any;
  visitByID(id: number): any;
}