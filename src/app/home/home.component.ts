import { Component } from '@angular/core';
import { TableComponent } from './table/table.component';
import { keys, users } from '../tableData';
import { Key, User } from '../shared/models';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TableComponent],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  tableData: User[] = users;
  tableKeys: Key[] = keys;

  logRawData(rawData: User) {
    console.log(rawData);
  }
}
