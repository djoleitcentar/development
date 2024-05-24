import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  constructor(private http: HttpClient) {}

  getAllProjects(query) {
    return this.http.get(
      `${environment.apiUrl}/api/projects?${query}&per_page=5`
    );
  }
}
