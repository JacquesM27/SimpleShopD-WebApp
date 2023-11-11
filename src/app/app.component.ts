import { Component } from '@angular/core';
import { LoginUser } from './models/user/login/LoginUser';
import { AuthService } from './services/auth/auth.service';
import { LoginResponse } from './models/user/login/LoginRespose';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SimpleShopD-WebApp';

  loginUser: LoginUser = { email: '', password: '' };

  constructor(private authService: AuthService) { }

  Login() {
    this.authService.Login(this.loginUser).subscribe((response: LoginResponse) => {
      localStorage.setItem('authToken', response.jwt);
      console.log(localStorage);
    });
  }

  Refresh() {
    this.authService.Refresh().subscribe((response: any) => {
      console.log(response);
    });
  }

  DummyHi() {
    this.authService.DummyHi().subscribe((response: any) => {
      console.log(response);
    });
  }

  DummyHiAuth() {
    this.authService.DummyHiAuth().subscribe((response: any) => {
      console.log(response);
    });
  }
}
