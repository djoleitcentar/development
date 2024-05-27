import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilderComponent } from '../../../shared/components/form-builder/form-builder.component';
import { projectFilterFields } from '../../../shared/data/projectFilterFields';
import { FormBuilderService } from '../../../shared/services/form-builder.service';
import { ClientsService } from '../../../shared/services/clients.service';
import { ProjectsService } from '../../../shared/services/projects.service';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { bootstrapFloppy } from '@ng-icons/bootstrap-icons';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-update-page',
  standalone: true,
  imports: [NgIconComponent, FormBuilderComponent],
  templateUrl: './update-page.component.html',
  styleUrl: './update-page.component.scss',
  viewProviders: [
    provideIcons({
      bootstrapFloppy,
    }),
  ],
})
export class UpdatePageComponent implements OnInit {
  editingProjectId: string;
  editingProjectFilterFields = projectFilterFields;
  editingProjectFilters: FormGroup;
  clients;
  editingProjectData;
  editingProject;

  constructor(
    private route: ActivatedRoute,
    private formBuilderService: FormBuilderService,
    private projectsService: ProjectsService,
    private clientsService: ClientsService
  ) {}

  ngOnInit(): void {
    this.getParams();
    this.getAllClients();
    this.createProjectForm();
    this.getCurrentProject();
  }

  createProjectForm() {
    this.editingProjectFilters = this.formBuilderService.createForm(
      this.editingProjectFilterFields
    );
  }

  getParams() {
    this.route.paramMap.subscribe({
      next: (params) => {
        this.editingProjectId = params.get('id');
      },
    });
  }

  getAllClients() {
    this.clientsService.getAllClients().subscribe({
      next: (response) => {
        this.clients = response;
        projectFilterFields[1].options = this.clients.data.map((client) => {
          return { label: client.name, value: client.id };
        });
      },
    });
  }

  getCurrentProject() {
    this.projectsService.getProject(this.editingProjectId).subscribe({
      next: (response) => {
        this.editingProjectData = response;
        this.editingProject = this.editingProjectData.data;
        this.editingProjectFilters.patchValue({
          title: this.editingProject.title,
          client_id: this.editingProject.client.id,
          color: this.editingProject.color,
          description: this.editingProject.description,
        });
      },
    });
  }

  onSave() {
    this.projectsService
      .updateProject(this.editingProjectId, this.editingProjectFilters.value)
      .subscribe({
        next: (response: { message: string }) => {
          alert(response.message);
        },
        error: (error) => {
          alert(error.error.message);
        },
      });
  }
}
