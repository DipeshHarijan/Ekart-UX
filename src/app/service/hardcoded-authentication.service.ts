import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username: string, password: string): boolean {
    if (username === "dipesh" && password === "dipesh") {
      sessionStorage.setItem('authenticatedUser', username);
      sessionStorage.setItem('userPassword', password);
      return true;
    }
    return false;
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem("authenticatedUser");
    return !(user === null);
  }
  logout(){
    sessionStorage.removeItem("authenticatedUser");
    sessionStorage.removeItem("userPassword");
  }
}
