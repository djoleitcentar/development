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

  getProject(id) {
    return this.http.get(`${environment.apiUrl}/api/projects/${id}`);
  }

  createProject(projectData) {
    return this.http.post(`${environment.apiUrl}/api/projects`, projectData);
  }

  updateProject(id, projectData) {
    return this.http.patch(
      `${environment.apiUrl}/api/projects/${id}`,
      projectData
    );
  }

  deleteProject(id) {
    return this.http.delete(`${environment.apiUrl}/api/projects/${id}`);
  }
}
