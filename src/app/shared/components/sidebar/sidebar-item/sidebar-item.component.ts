import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgIconComponent } from '@ng-icons/core';

@Component({
  standalone: true,
  selector: 'app-sidebar-item',
  templateUrl: './sidebar-item.component.html',
  imports: [NgIconComponent, CommonModule, RouterLink, RouterLinkActive],
})
export class SidebarItemComponent {
  // @Input() itemData: any;
  @Input() isOpen!: boolean;
  @Input() item;
  @Output() isOpenSidebar = new EventEmitter<boolean>(this.isOpen);

  isOpenStateChanged() {
    this.isOpenSidebar.emit(this.isOpen);
  }
}
