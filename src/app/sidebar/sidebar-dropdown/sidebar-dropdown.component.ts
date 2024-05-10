import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgIconComponent } from '@ng-icons/core';

@Component({
  selector: 'app-sidebar-dropdown',
  standalone: true,
  imports: [NgIconComponent, CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './sidebar-dropdown.component.html'
})
export class SidebarDropdownComponent {
  @Input() isOpen!: boolean;
  @Input() item;
  @Output() isOpenSidebar = new EventEmitter<boolean>(this.isOpen);

  isOpenStateChanged() {
    this.isOpenSidebar.emit(this.isOpen);
  }
}
