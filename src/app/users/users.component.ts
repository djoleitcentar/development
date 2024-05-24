import { Component, OnInit } from '@angular/core';
import {
  bootstrapPlusCircle,
  bootstrapArrowClockwise,
  bootstrapSearch,
} from '@ng-icons/bootstrap-icons';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { FormBuilderComponent } from '../shared/components/form-builder/form-builder.component';
import { usersHeaderFilter } from '../shared/data/usersHeaderFilter';
import { usersPaginationFilter } from '../shared/data/usersPaginationFilter';
import { FormBuilderService } from '../shared/services/form-builder.service';
import { TableComponent } from '../shared/components/table/table.component';
import { UsersService } from '../shared/services/users.service';
import { Key, User } from '../shared/models';
import { usersTableKeys } from '../shared/data/usersTableKeys';
import { PaginationComponent } from '../shared/components/pagination/pagination.component';
import { CustomUtilsService } from '../shared/services/custom-utils.service';
import { NgClass, NgStyle } from '@angular/common';
import { UsersModalComponent } from '../shared/components/modal/modal.component';
import { updateUserForm } from '../shared/data/updateUserForm';
import { UserRole } from '../shared/enums/user-role.enum';
import { CurrentPageService } from '../shared/services/current-page.service';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    NgStyle,
    NgClass,
    NgIconComponent,
    FormBuilderComponent,
    TableComponent,
    PaginationComponent,
    UsersModalComponent,
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
  viewProviders: [
    provideIcons({
      bootstrapPlusCircle,
      bootstrapArrowClockwise,
      bootstrapSearch,
    }),
  ],
})
export class UsersComponent implements OnInit {
  usersHeaderFilterFields = usersHeaderFilter;
  usersPaginationFilterFields = usersPaginationFilter;
  createUserFormFields = updateUserForm;
  updateUserFormFields = updateUserForm;
  usersFormGroup;
  usersPaginationFormGroup;
  updateUsersFormGroup;
  createUsersFormGroup;
  tableDataResponse?;
  tableData: User[];
  tableKeys: Key[] = usersTableKeys;
  pages: number[];
  showModal: boolean = false;
  showModalCreate: boolean = false;
  eventObject;

  constructor(
    private formBuilderService: FormBuilderService,
    private usersService: UsersService,
    private currentPageService: CurrentPageService
  ) {}

  ngOnInit() {
    this.usersFormGroup = this.formBuilderService.createForm(
      this.usersHeaderFilterFields
    );
    this.usersPaginationFormGroup = this.formBuilderService.createForm(
      this.usersPaginationFilterFields
    );
    this.updateUsersFormGroup = this.formBuilderService.createForm(
      this.updateUserFormFields
    );
    this.createUsersFormGroup = this.formBuilderService.createForm(
      this.updateUserFormFields
    );
    this.onSearch();
  }

  onSearch(currentPage?: number) {
    if (currentPage) {
      this.usersPaginationFormGroup.value.page = currentPage;
    }
    let query = CustomUtilsService.createQueryString({
      ...this.usersFormGroup.value,
      ...this.usersPaginationFormGroup.value,
    });
    this.usersService.getAllUsers(query).subscribe({
      next: (response) => {
        this.tableDataResponse = response;
        this.tableData = this.tableDataResponse.data.map((singleUser) => {
          return {
            ...singleUser,
            role:
              singleUser.role_id === UserRole.ADMIN
                ? 'Administrator'
                : 'Developer',
          };
        });

        this.pages = Array.from(
          { length: this.tableDataResponse?.pagination.total_pages },
          (_, i) => i + 1
        );
      },
    });
  }

  resetAll() {
    this.usersFormGroup.reset();
    this.usersPaginationFormGroup.reset();
    this.onSearch();
    this.currentPageService.updateCurrentPage(1);
  }

  createUser() {
    this.showModalCreate = false;
    this.usersService.createUser(this.createUsersFormGroup.value).subscribe({
      next: (response: { message: string }) => {
        this.onSearch();
        alert(response.message);
      },
      error: (error) => {
        alert(error.error.message);
      },
    });
  }

  createUserClosed(event: boolean) {
    this.showModalCreate = event;
    this.createUsersFormGroup.reset();
  }

  updateUserModal(eventObject: { event: string; id: string }) {
    this.showModal = true;
    this.eventObject = eventObject;
    this.tableData.forEach((item) => {
      item.id === this.eventObject.id
        ? this.updateUsersFormGroup.patchValue({
            name: item.name,
            email: item.email,
            role_id: item.role_id,
          })
        : null;
    });
  }

  updateUser() {
    this.showModal = false;
    this.usersService
      .updateUser(this.eventObject.id, this.updateUsersFormGroup.value)
      .subscribe({
        next: (response: { message: string }) => {
          this.onSearch();
          alert(response.message);
        },
        error: (error) => {
          alert(error.error.message);
        },
      });
  }

  deleteUser(eventObject: { event: string; id: string }) {
    if (window.confirm('Are you sure you want to delete this user?')) {
      this.usersService.deleteUser(eventObject.id).subscribe({
        next: (response: { message: string }) => {
          this.onSearch();
          alert(response.message);
        },
        error: (error) => {
          alert(error.error.message);
        },
      });
    }
  }
}
