import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserApiPathService } from '../paths/user-api-path.service';
import { LoginRequest } from 'src/app/models/user/login/LoginRequest';
import { Observable } from 'rxjs';
import { LoginResponse } from 'src/app/models/user/login/LoginRespose';
import { RegisterRequest } from 'src/app/models/user/register/RegisterRequest';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  constructor(private http: HttpClient,
    private apiPathService: UserApiPathService) { }

    public Login(loginUser: LoginRequest) : Observable<LoginResponse> {
      return this.http.post<LoginResponse>(this.apiPathService.LoginPath(), loginUser);
    }

    public Register(registerRequest: RegisterRequest) : Observable<string> {
      return this.http.post<string>(this.apiPathService.RegisterPath(), registerRequest);
    }

    public Refresh() : Observable<any> {
      return this.http.post<any>(this.apiPathService.RefreshTokenPath(), null);
    }

    public Logout() : Observable<any> {
      return this.http.post<any>(this.apiPathService.LogoutPath(), null);
    }
}
