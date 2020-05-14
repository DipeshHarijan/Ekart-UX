import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { onErrorResumeNext } from 'rxjs';
import { BasicAuthenticationService } from './basic-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorBasicAuthService implements HttpInterceptor{

  constructor(private basicAuthenticationService: BasicAuthenticationService) { }
  
  intercept(request : HttpRequest<any>, next: HttpHandler) {
    let basicAuthHeaderString = this.basicAuthenticationService.getToken();
    let username = this.basicAuthenticationService.getUsername();

    if(basicAuthHeaderString && username){
      request = request.clone({
        setHeaders : {
          Authorization : basicAuthHeaderString
        }
      })
    }
    return next.handle(request);
    
  }
}
