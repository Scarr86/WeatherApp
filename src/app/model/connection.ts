import { Observable } from 'rxjs';

export type ConnectionParams = {
  q?: string;
  lang: string;
  units: string;
  lat?: number;
  lon?: number;
  id?: number;
  APPID?: string;
  exclude?: string;
};

export abstract class Connection {
  abstract get<T>(url: string, params: ConnectionParams): Observable<T>;
}
