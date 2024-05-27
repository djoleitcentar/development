import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Key, User } from '../../models/index';
import { CommonModule } from '@angular/common';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { bootstrapPen } from '@ng-icons/bootstrap-icons';
import { ionTrashBinOutline } from '@ng-icons/ionicons';
import { UpdateProjectComponent } from '../../../projects/update-project/update-project.component';
import { DeleteProjectComponent } from '../../../projects/delete-project/delete-project.component';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    NgIconComponent,
    CommonModule,
    UpdateProjectComponent,
    DeleteProjectComponent,
  ],
  templateUrl: './table.component.html',
  viewProviders: [
    provideIcons({
      bootstrapPen,
      ionTrashBinOutline,
    }),
  ],
})
export class TableComponent {
  @Input() tableData: User[];
  @Input() tableKeys: Key[];
  @Output() onEdit = new EventEmitter<User>();
  @Output() editOrDeleteUpdate = new EventEmitter();

  handleEdit(rowData: User) {
    this.onEdit.emit(rowData);
  }

  editOrDelete(event: string, id: string) {
    this.editOrDeleteUpdate.emit({ event, id });
  }
}
