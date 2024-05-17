import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormBuilderService {

  constructor() { }

  createForm(formFields) {
    const formGroup = new FormGroup({})
    formFields.forEach(field => {
      formGroup.addControl(field.formControlName, new FormControl(field.value))
    })
    return formGroup;
  }
}
