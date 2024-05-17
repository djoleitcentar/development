import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GetAllUsersService {
  apiUrl = environment.apiUrl;
  token = JSON.parse(localStorage.getItem('user')).token;

  constructor(private http: HttpClient) { }

  getAllUsers() {
    const headers = new HttpHeaders({ 'Authorization': `Bearer ${this.token}` })
    return this.http.get(`${this.apiUrl}/api/users?per_page=5`, { headers });
  }
}
