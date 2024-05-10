import { Component } from '@angular/core';
import tableDataRaw from '../../tableData.json'

export type User = {
  name: string;
  title: string;
  email: string;
  role: string;
}

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [],
  templateUrl: './table.component.html'
})
export class TableComponent {
  tableData: User[] = tableDataRaw.users;
  tableKeys = Object.keys(this.tableData[0]);
}