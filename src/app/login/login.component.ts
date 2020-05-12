import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = "";
  password = "";
  errorMessage = "Invalid credentials";
  invalidLogin = false;
  constructor(private router: Router, private hardcodedAuthenticationService: HardcodedAuthenticationService) { }

  ngOnInit() {
  }

  handleLogin() {
    //if (this.username === "dipesh" && this.password === "dipesh") {
      if(this.hardcodedAuthenticationService.authenticate(this.username, this.password)){
      this.router.navigate(['dashboard', this.username])
      this.invalidLogin = false;
    } else
      this.invalidLogin = true;
    // console.log(this.username);
  }

}
