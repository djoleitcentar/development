import { Component, Input } from '@angular/core';
import { Field } from '../../shared/models';

@Component({
  selector: 'app-form-builder',
  standalone: true,
  imports: [],
  templateUrl: './form-builder.component.html'
})
export class FormBuilderComponent {
  @Input() formFields: Field[];
}
