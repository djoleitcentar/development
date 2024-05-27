import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { ionTrashBinOutline } from '@ng-icons/ionicons';
import { ProjectsService } from '../../shared/services/projects.service';

@Component({
  selector: 'app-delete-project',
  standalone: true,
  imports: [NgIconComponent],
  templateUrl: './delete-project.component.html',
  viewProviders: [
    provideIcons({
      ionTrashBinOutline,
    }),
  ],
})
export class DeleteProjectComponent {
  @Input() rowId: number;
  @Output() getAllProjectsAfterDelete = new EventEmitter();

  constructor(private projectsService: ProjectsService) {}

  deleteProject() {
    if (window.confirm('Do you want to delete this project?')) {
      this.projectsService.deleteProject(this.rowId).subscribe({
        next: (response: { message: string }) => {
          alert(response.message);
          this.getAllProjectsAfterDelete.emit();
        },
        error: (error: { message: string }) => {
          alert(error.message);
        },
      });
    }
  }
}
