import { Component } from '@angular/core';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { formFieldsData } from '../formData';
import { Field } from '../shared/models';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [FormBuilderComponent],
  templateUrl: './calendar.component.html'
})
export class CalendarComponent {
  formFields: Field[] = formFieldsData;
}
