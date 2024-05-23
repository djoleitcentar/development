import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilderComponent } from '../form-builder/form-builder.component';
import { NgStyle } from '@angular/common';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { bootstrapFloppy, bootstrapXLg } from '@ng-icons/bootstrap-icons';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [NgIconComponent, NgStyle, FormBuilderComponent],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
  viewProviders: [
    provideIcons({
      bootstrapXLg,
      bootstrapFloppy,
    }),
  ],
})
export class UsersModalComponent {
  @Input() showModal: boolean = false;
  @Input() showModalCreate: boolean = false;
  @Input() eventName: string;
  @Output() onClose = new EventEmitter();
  @Output() updateAndCreateUserEmitter = new EventEmitter();

  changeEditingUser() {
    this.showModal = false;
    this.showModalCreate = false;
    this.onClose.emit(false);
  }

  onSave() {
    this.updateAndCreateUserEmitter.emit();
  }
}
