import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class HttpHeadersInterceptors implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    req = req.clone({
      setHeaders: {
        'x-rapidapi-key': '197603539fd5449babc73087c446365a',
        'x-rapidapi-host': 'https://api.rawg.io/api',
      },
      setParams: {
        key: '197603539fd5449babc73087c446365a',
      },
    });
    return next.handle(req);
  }
}
