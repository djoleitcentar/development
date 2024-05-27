import { Component, Input } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { ionTrashBinOutline } from '@ng-icons/ionicons';

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

  deleteProject() {
    console.log(this.rowId);
  }
}
