import { Component, Input } from '@angular/core';
import {
  ControlContainer,
  FormGroupDirective,
  ReactiveFormsModule,
} from '@angular/forms';
import { Field } from '../../../models/index';
import { NgClass, NgStyle } from '@angular/common';
// import { MatSelectModule } from '@angular/material/select';
// import { MatFormFieldModule } from '@angular/material/form-field';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzFormModule } from 'ng-zorro-antd/form';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgClass,
    NgStyle,
    // MatSelectModule,
    // MatFormFieldModule,
    NzSelectModule,
    NzFormModule,
  ],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss',
  viewProviders: [
    { provide: ControlContainer, useExisting: FormGroupDirective },
  ],
})
export class DropdownComponent {
  @Input() field: Field;
  currentColor: string;

  changeSelectedColor(selectedColor) {
    console.log(selectedColor);
    this.currentColor = selectedColor;
  }
}
