import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginCredentials, LoginResponse } from '../models/index';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  login(credentials: LoginCredentials) {
    return this.http.post<LoginResponse>(`${this.apiUrl}/api/login`, credentials);
  }
}
