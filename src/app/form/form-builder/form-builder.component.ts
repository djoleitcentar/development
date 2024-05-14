import { Component, Input } from '@angular/core';
import { Field } from '../../shared/models';
import { ReactiveFormsModule } from '@angular/forms';
import { FormInputComponent } from './form-input/form-input.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { TextareaComponent } from './textarea/textarea.component';

@Component({
  selector: 'app-form-builder',
  standalone: true,
  imports: [ReactiveFormsModule, FormInputComponent, DropdownComponent, TextareaComponent],
  templateUrl: './form-builder.component.html'
})
export class FormBuilderComponent {
  @Input() formFields: Field[];
  @Input() formGroup;
}
