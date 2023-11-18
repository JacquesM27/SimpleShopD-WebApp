import { Component } from '@angular/core';
import { LoginRequest } from './models/user/login/LoginRequest';
import { AuthService } from './services/auth/auth.service';
import { LoginResponse } from './models/user/login/LoginRespose';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SimpleShopD-WebApp';

  //loginUser: LoginRequest = { email: '', password: '' };

  constructor(private router: Router) { }

  redirectToLogin() {
    this.router.navigate(['/account']);
  }

  redirectToHomePage() {
    this.router.navigate(['/']);
  }
}
