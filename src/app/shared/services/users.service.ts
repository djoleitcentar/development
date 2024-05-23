import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  getAllUsers(query: string) {
    return this.http.get(`${environment.apiUrl}/api/users?${query}`);
  }

  createUser(userData) {
    return this.http.post(`${environment.apiUrl}/api/users`, userData);
  }

  updateUser(id: string, userData) {
    return this.http.patch(`${environment.apiUrl}/api/users/${id}`, userData);
  }

  deleteUser(id: string) {
    return this.http.delete(`${environment.apiUrl}/api/users/${id}`);
  }
}
