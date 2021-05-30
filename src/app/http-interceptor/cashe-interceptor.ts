// import { Injectable } from '@angular/core';
// import {
//   HttpEvent,
//   HttpInterceptor,
//   HttpHandler,
//   HttpRequest,
// } from '@angular/common/http';

// import { Observable, of } from 'rxjs';
// import { CasheRequestService } from '../service/cashe-request.service';
// import { tap } from 'rxjs/operators';
// import { isHttpResponse } from '.';

// /** Pass untouched request through to the next request handler. */
// @Injectable()
// export class CasheInterceptor implements HttpInterceptor {
//   constructor(private cash: CasheRequestService) {}
//   intercept(
//     req: HttpRequest<any>,
//     next: HttpHandler
//   ): Observable<HttpEvent<any>> {
//     const res = this.cash.get(req);
//     return res ? of(res) : this.sendRequest(req, next);
//   }
//   sendRequest(req: HttpRequest<any>, next: HttpHandler) {
//     return next.handle(req).pipe(
//       tap((ev) => {
//         if (isHttpResponse(ev)) this.cash.put(req, ev);
//       })
//     );
//   }
// }
