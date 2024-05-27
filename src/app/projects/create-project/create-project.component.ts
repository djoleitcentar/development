import { Component, OnInit } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { bootstrapFloppy } from '@ng-icons/bootstrap-icons';
import { FormBuilderService } from '../../shared/services/form-builder.service';
import { FormGroup } from '@angular/forms';
import { projectFilterFields } from '../../shared/data/projectFilterFields';
import { FormBuilderComponent } from '../../shared/components/form-builder/form-builder.component';
import { ClientsService } from '../../shared/services/clients.service';
import { ProjectsService } from '../../shared/services/projects.service';

@Component({
  selector: 'app-create-project',
  standalone: true,
  imports: [NgIconComponent, FormBuilderComponent],
  templateUrl: './create-project.component.html',
  styleUrl: './create-project.component.scss',
  viewProviders: [
    provideIcons({
      bootstrapFloppy,
    }),
  ],
})
export class CreateProjectComponent implements OnInit {
  editingProjectFilterFields = projectFilterFields;
  createProjectFilters: FormGroup;
  clients;

  constructor(
    private formBuilderService: FormBuilderService,
    private clientsService: ClientsService,
    private projectsService: ProjectsService
  ) {}

  ngOnInit(): void {
    this.createProjectForm();
    this.getAllClients();
  }

  createProjectForm() {
    this.createProjectFilters = this.formBuilderService.createForm(
      this.editingProjectFilterFields
    );
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

  onSave() {
    this.projectsService
      .createProject(this.createProjectFilters.value)
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
