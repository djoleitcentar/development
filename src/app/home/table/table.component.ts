import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Key, User } from '../../shared/models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table.component.html'
})
export class TableComponent {
  @Input() tableData: User[];
  @Input() tableKeys: Key[];
  @Output() onEdit = new EventEmitter<User>();

  handleEdit(rowData: User) {
    this.onEdit.emit(rowData);
  }
}