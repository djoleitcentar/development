import { Component, Input } from '@angular/core';
import { Field } from '../../../shared/models';
import { ControlContainer, FormGroupDirective, ReactiveFormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-form-input',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './form-input.component.html',
  styleUrl: './form-input.component.scss',
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }]
})
export class FormInputComponent {
  @Input() field: Field;
}