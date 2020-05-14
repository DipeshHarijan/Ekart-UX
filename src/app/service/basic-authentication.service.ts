import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {
  baseUrl: string;
  

  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'http://localhost:5000/basicauth';
  }

  authenticate(username: string, password: string) {
    let authString = 'Basic '+ window.btoa(username+':'+password);
    let headers = new HttpHeaders({
      Authorization : authString
    })

    return this.httpClient.get<BasicAuthBean>(this.baseUrl, {headers})
              .pipe(
                map(
                  data=>{
                    sessionStorage.setItem('username', username);
                    sessionStorage.setItem('token', authString);
                    return data;
                  }
                )
              );
  }

  getUsername(){
    return sessionStorage.getItem('username');
  }

  getToken(){
    return sessionStorage.getItem('token');
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem("username");
    return !(user === null);
  }
  logout(){
    sessionStorage.removeItem("username");
    sessionStorage.removeItem("token");
  }
}

export class BasicAuthBean{
  constructor(public message: string){}
}