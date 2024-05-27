import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilderComponent } from '../../../shared/components/form-builder/form-builder.component';
import { projectFilterFields } from '../../../shared/data/projectFilterFields';
import { FormBuilderService } from '../../../shared/services/form-builder.service';

@Component({
  selector: 'app-update-page',
  standalone: true,
  imports: [FormBuilderComponent],
  templateUrl: './update-page.component.html',
  styleUrl: './update-page.component.scss',
})
export class UpdatePageComponent implements OnInit {
  editingProjectId: string;
  editingProjectFilterFields = projectFilterFields;
  editingProjectFilters;

  constructor(
    private route: ActivatedRoute,
    private formBuilderService: FormBuilderService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        this.editingProjectId = params.get('id');
      },
    });
    this.editingProjectFilters = this.formBuilderService.createForm(
      this.editingProjectFilterFields
    );
  }
}
