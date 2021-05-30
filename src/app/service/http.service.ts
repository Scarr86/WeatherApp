import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Connection, ConnectionParams } from '../model/connection';

@Injectable()
export class HttpService implements Connection {
  constructor(private http: HttpClient) {}
  get<T>(url: string, params: ConnectionParams) {
    return this.http.get<T>(url, {
      params: (params as unknown) as { [p: string]: string },
    });
  }
}
