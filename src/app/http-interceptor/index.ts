import {
  HttpEvent,
  HttpResponse,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { AuthInterceptor } from './auth-interceptor';
// import { CasheInterceptor } from './cashe-interceptor';
import { LoggerInterceptor } from './logger-interceptor';


/** Http interceptor providers in outside-in order */
export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: LoggerInterceptor, multi: true },
  //   { provide: HTTP_INTERCEPTORS, useClass: CasheInterceptor, multi: true },
  //   { provide: HTTP_INTERCEPTORS, useClass: NoopInterceptor, multi: true },
];
