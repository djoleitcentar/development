import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { bootstrapPen } from '@ng-icons/bootstrap-icons';
import { NgIconComponent, provideIcons } from '@ng-icons/core';

@Component({
  selector: 'app-update-project',
  standalone: true,
  imports: [NgIconComponent],
  templateUrl: './update-project.component.html',
  viewProviders: [
    provideIcons({
      bootstrapPen,
    }),
  ],
})
export class UpdateProjectComponent {
  @Input() rowId: number;

  constructor(private router: Router) {}

  updateProject() {
    this.router.navigate(['homelayout/goals/edit', this.rowId]);
  }
}
