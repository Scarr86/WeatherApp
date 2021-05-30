import { HttpEvent, HttpResponse } from '@angular/common/http';

export function isHttpResponse<T>(ev: HttpEvent<T>): ev is HttpResponse<T> {
  return ev instanceof HttpResponse;
}
