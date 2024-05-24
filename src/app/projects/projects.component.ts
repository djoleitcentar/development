import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  bootstrapPlusCircle,
  bootstrapArrowClockwise,
  bootstrapSearch,
} from '@ng-icons/bootstrap-icons';
import { FormBuilderComponent } from '../shared/components/form-builder/form-builder.component';
import { projectsHeaderFilter } from '../shared/data/projectsHeaderFilter';
import { FormBuilderService } from '../shared/services/form-builder.service';
import { Key, User } from '../shared/models';
import { projectsTableKeys } from '../shared/data/projectsTableKeys';
import { TableComponent } from '../shared/components/table/table.component';
import { ProjectsService } from '../shared/services/projects.service';
import { PaginationComponent } from '../shared/components/pagination/pagination.component';
import { CustomUtilsService } from '../shared/services/custom-utils.service';
import { CurrentPageService } from '../shared/services/current-page.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    NgIconComponent,
    FormBuilderComponent,
    TableComponent,
    PaginationComponent,
  ],
  templateUrl: './projects.component.html',
  viewProviders: [
    provideIcons({
      bootstrapPlusCircle,
      bootstrapArrowClockwise,
      bootstrapSearch,
    }),
  ],
})
export class ProjectsComponent {
  projectsHeaderFilterFields = projectsHeaderFilter;
  projectsHeaderFilter;
  tableDataResponse?;
  tableData: User[];
  tableKeys: Key[] = projectsTableKeys;
  pages: number[];
  @ViewChild('goToPage') goToPage: ElementRef<HTMLInputElement>;

  constructor(
    private formBuilderService: FormBuilderService,
    private projectsService: ProjectsService,
    private currentPageService: CurrentPageService
  ) {}

  ngOnInit() {
    this.projectsHeaderFilter = this.formBuilderService.createForm(
      this.projectsHeaderFilterFields
    );
    this.onSearch();
  }

  onSearch(currentPage?: number) {
    let query = CustomUtilsService.createQueryString({
      ...this.projectsHeaderFilter.value,
      page: currentPage,
    });
    this.projectsService.getAllProjects(query).subscribe({
      next: (response) => {
        this.tableDataResponse = response;
        this.tableDataResponse.data.forEach((item) => {
          item.clientName = item.client.name;
        });
        this.tableData = this.tableDataResponse.data;

        this.pages = Array.from(
          { length: this.tableDataResponse?.pagination.total_pages },
          (_, i) => i + 1
        );
      },
    });
  }

  resetAll() {
    this.projectsHeaderFilter.reset();
    this.goToPage.nativeElement.value = null;
    this.onSearch();
    this.currentPageService.updateCurrentPage(1);
  }

  changePage(currentPage: number) {
    this.currentPageService.updateCurrentPage(Number(currentPage));
  }
}
