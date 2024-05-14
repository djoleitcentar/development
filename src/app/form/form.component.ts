import { Component, OnInit } from '@angular/core';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { formFieldsData } from '../formData';
import { Field } from '../shared/models';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormBuilderComponent],
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {
  formFields: Field[] = formFieldsData;
  formGroup: FormGroup;

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.formGroup = new FormGroup({})
    this.formFields.forEach(field => {
      this.formGroup.addControl(field.formControlName, new FormControl(field.value))
    })
  }

  handleSubmit() {
    console.log(this.formGroup.value);
  }
}
