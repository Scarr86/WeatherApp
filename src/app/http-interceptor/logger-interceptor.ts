import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';
import { isHttpResponse } from './helper';

@Injectable()
export class LoggerInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const start = Date.now();
    let ok = '';
    let body: any;
    return next.handle(req).pipe(
      tap(
        (ev) =>
          isHttpResponse(ev) ? ((ok = 'succesed'), (body = ev.body)) : '',
        (er: HttpErrorResponse) => (ok = `failed desc: ${er.statusText}`)
      ),
      finalize(() => {
        const elapsed = Date.now() - start;
        console.log(
          `${req.method} ${decodeURIComponent(
            req.urlWithParams
          )} ${ok} ${elapsed} ms\n`
        );
      })
    );
  }
}
