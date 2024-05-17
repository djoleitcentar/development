import { Component, OnInit } from '@angular/core';
import { TableComponent } from '../shared/components/table/table.component';
import { keys, users } from '../shared/data/tableData';
import { Key, User } from '../shared/models/index';
import { AuthService } from '../shared/services/auth.service';

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

  // constructor(private authService: AuthService) {}

  // ngOnInit(): void {
  //   console.log(this.authService.getCredentials())
  // }
}
