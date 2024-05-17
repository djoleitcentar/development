import { Component, Input } from '@angular/core';
import { ControlContainer, FormGroupDirective, ReactiveFormsModule } from '@angular/forms';
import { Field } from '../../../models/index';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss',
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }]
})
export class DropdownComponent {
  @Input() field: Field;
}