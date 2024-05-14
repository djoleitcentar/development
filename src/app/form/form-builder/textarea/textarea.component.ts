import { Component, Input } from '@angular/core';
import { Field } from '../../../shared/models';
import { ControlContainer, FormGroupDirective, ReactiveFormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-textarea',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './textarea.component.html',
  styleUrl: './textarea.component.scss',
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }]
})
export class TextareaComponent {
  @Input() field: Field;
}
