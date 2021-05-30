import { publishReplay, refCount } from 'rxjs/operators';
import { Connection, ConnectionParams } from './connection';

export abstract class WeatherService<T> {
  protected defReqestParams: ConnectionParams;
  protected abstract readonly url: string;
  protected abstract readonly connection: Connection;
  constructor() {
    this.defReqestParams = {
      lang: 'ru',
      units: 'metric',
    };
  }
  requestByName(name: string) {
    return this.connection
      .get<T>(this.url, {
        q: name,
        ...this.defReqestParams,
      })
      .pipe(publishReplay(1), refCount());
  }
  requestByCoords({ lat, lon }: { lat: number; lon: number }) {
    return this.connection
      .get<T>(this.url, {
        lat,
        lon,
        ...this.defReqestParams,
      })
      .pipe(publishReplay(1), refCount());
  }
  requestByID(id: number) {
    return this.connection
      .get<T>(this.url, { id, ...this.defReqestParams })
      .pipe(publishReplay(1), refCount());
  }
}
