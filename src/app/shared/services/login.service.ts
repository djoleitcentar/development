import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginCredentials, LoginResponse } from '../models/index';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient, private router: Router) { }

  login(credentials: LoginCredentials) {
    return this.http.post<LoginResponse>(`${this.apiUrl}/api/login`, credentials);
  }

  logout() {
    localStorage.removeItem('user');
    this.router.navigate(['login']);
  }
}
