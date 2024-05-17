import { Component, OnInit } from '@angular/core';
import { bootstrapPlusCircle, bootstrapArrowClockwise, bootstrapSearch } from '@ng-icons/bootstrap-icons';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { FormBuilderComponent } from '../shared/components/form-builder/form-builder.component';
import { usersHeaderFilter } from '../shared/data/usersHeaderFilter';
import { FormBuilderService } from '../shared/services/form-builder.service';
import { TableComponent } from '../shared/components/table/table.component';
import { GetAllUsersService } from '../shared/services/get-all-users.service';
import { Key, User } from '../shared/models';
import { usersTableKeys } from '../shared/data/usersTableKeys';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [NgIconComponent, FormBuilderComponent, TableComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
  viewProviders: [provideIcons({
    bootstrapPlusCircle,
    bootstrapArrowClockwise,
    bootstrapSearch
  })]
})
export class UsersComponent implements OnInit {
  usersHeaderFilterFields = usersHeaderFilter;
  usersFormGroup;
  tableDataResponse;
  tableData: User[];
  tableKeys: Key[] = usersTableKeys;

  constructor(private formBuilderService: FormBuilderService, private getAllUsersService: GetAllUsersService) {}

  ngOnInit() {
    this.usersFormGroup = this.formBuilderService.createForm(this.usersHeaderFilterFields);
    this.getAllUsersService.getAllUsers().subscribe({next: response => {
      this.tableDataResponse = response;
      this.tableData = this.tableDataResponse.data;
    }});
  }
}
