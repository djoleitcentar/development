import { Component, Input, OnInit } from '@angular/core';
import { FormBuilderComponent } from '../shared/components/form-builder/form-builder.component';
import { Field } from '../shared/models/index';
import { FormGroup } from '@angular/forms';
import { NgClass } from '@angular/common';
import { formFieldsData } from '../shared/data/formData';
import { FormBuilderService } from '../shared/services/form-builder.service';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [NgClass, FormBuilderComponent],
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {
  @Input() formFields: Field[] = formFieldsData;
  formGroup: FormGroup;

  constructor(private formBuiderService: FormBuilderService) {}

  ngOnInit(): void {
    this.formGroup = this.formBuiderService.createForm(this.formFields);
  }
}
