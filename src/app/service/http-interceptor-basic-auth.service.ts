import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { onErrorResumeNext } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorBasicAuthService implements HttpInterceptor{

  constructor() { }
  
  intercept(request : HttpRequest<any>, next: HttpHandler) {
    let username = 'dipesh';
    let password = 'dipesh';
    let basicAuthHeaderString = 'Basic '+ window.btoa(username + ':'+ password);
    
    request = request.clone({
      setHeaders : {
        Authorization : basicAuthHeaderString
      }
    })
    return next.handle(request);
  }
}
