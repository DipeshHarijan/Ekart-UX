import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { BasicAuthenticationService } from '../service/basic-authentication.service';


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
  constructor(private router: Router, private basicAuthenticationService: BasicAuthenticationService) { }

  ngOnInit() {
  }

  handleLogin() {
    //if (this.username === "dipesh" && this.password === "dipesh") {
      this.basicAuthenticationService.authenticate(this.username, this.password).subscribe(
        data=>{
          console.log(data);
          this.router.navigate(['dashboard', this.username]);
          this.invalidLogin = false;
        },
        error=>{
          console.log(error);
          this.invalidLogin = true;
        }
      )
  }

}
