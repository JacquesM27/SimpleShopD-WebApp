import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginResponse } from 'src/app/models/user/login/LoginRespose';
import { LoginUser } from 'src/app/models/user/login/LoginUser';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = 'https://localhost:7278/api/';

  constructor(private http: HttpClient) { }

  public Login(loginUser: LoginUser) : Observable<LoginResponse> {
    return this.http.post<LoginResponse>(this.url + 'Users/login', loginUser);
  }

  public Refresh() : Observable<any> {
    return this.http.post<any>(this.url + 'Users/token/refresh', null);
  }

  public DummyHi(): Observable<any> {
    return this.http.post<any>(this.url + 'Dummy/hi', null);
  }

  public DummyHiAuth(): Observable<any> {
    return this.http.post<any>(this.url + 'Dummy/hi/auth', null);
  }
}
