import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(private http: HttpClient) {}

  getUserProfile() {
    return this.http.get(`${environment.apiUrl}/api/user/profile-information`);
  }

  updateUserProfile(userProfileData) {
    return this.http.patch(
      `${environment.apiUrl}/api/user/profile-information`,
      userProfileData
    );
  }
}
