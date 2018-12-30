import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { CommonService } from '../storage/common.service';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/do';
import { ErrorHandler } from './ErrorHandler';
 
@Injectable()
export class RequestInterceptor implements HttpInterceptor {
 
  constructor(
    private errorHandler : ErrorHandler,
    private common:CommonService
  ) {}
 
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.common.getToken();
    let changedRequest = request;
    const headerSettings: {[name: string]: string | string[]; } = {};
    for (const key of request.headers.keys()) {
      headerSettings[key] = request.headers.getAll(key);
    }
    if (token) {
      headerSettings['token'] = token.toString();
    }
    headerSettings['Content-Type'] = 'application/json';
    const newHeader = new HttpHeaders(headerSettings);

    changedRequest = request.clone({headers: newHeader});

    

    return next.handle(changedRequest).do((event: HttpEvent<any>) => {}, (err: any) => {
      if (err instanceof HttpErrorResponse) {
        this.errorHandler.handleError(err);
      }
    });
  }
}
