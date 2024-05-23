import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Key, User } from '../../models/index';
import { CommonModule } from '@angular/common';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { bootstrapPen, bootstrapXLg } from '@ng-icons/bootstrap-icons';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [NgIconComponent, CommonModule],
  templateUrl: './table.component.html',
  viewProviders: [
    provideIcons({
      bootstrapPen,
      bootstrapXLg,
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
