import { Component, Input } from '@angular/core';
import { Field } from '../../../models/index';
import {
  ControlContainer,
  FormGroupDirective,
  ReactiveFormsModule,
} from '@angular/forms';
import { NgClass } from '@angular/common';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';

@Component({
  selector: 'app-form-input',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass, NzInputModule, NzFormModule],
  templateUrl: './form-input.component.html',
  styleUrl: './form-input.component.scss',
  viewProviders: [
    { provide: ControlContainer, useExisting: FormGroupDirective },
  ],
})
export class FormInputComponent {
  @Input() field: Field;
}
