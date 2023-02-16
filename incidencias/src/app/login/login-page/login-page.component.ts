import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginData } from 'src/app/core/model/login-data';
import { AuthService } from 'src/app/core/service/auth.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor( 
    private readonly authService: AuthService,
    private readonly router: Router,
    private readonly location:Location
    ) {
   
   }

  ngOnInit(): void {
    
  }
  login(loginData: LoginData) {
    this.authService
      .login(loginData)
      .then(() => {
        this.router.navigate(['/dashboard']);
        this.authService.isLoged=true;
    
    })
      .catch((e) => console.log(e.message));
  }
  loginWithGoogle() {
    this.authService
      .loginWithGoogle()
      .then(() => {this.router.navigate(['/dashboard']);
      this.authService.isLoged=true;
    })
      .catch((e) => console.log(e.message));
  }
  goBack() {
    this.router.navigate(['introduccion']);
  }
}
