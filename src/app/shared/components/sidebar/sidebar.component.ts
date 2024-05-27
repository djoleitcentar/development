import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  bootstrapSearch,
  bootstrapHouse,
  bootstrapCalendar,
  bootstrapChat,
  bootstrapBriefcase,
  bootstrapBarChart,
  bootstrapBullseye,
  bootstrapBell,
  bootstrapGear,
  bootstrapThreeDots,
  bootstrapXLg,
  bootstrapChevronUp,
  bootstrapCircleFill,
} from '@ng-icons/bootstrap-icons';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SidebarItemComponent } from './sidebar-item/sidebar-item.component';
import { SidebarDropdownComponent } from './sidebar-dropdown/sidebar-dropdown.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    NgIconComponent,
    CommonModule,
    RouterLink,
    RouterLinkActive,
    SidebarItemComponent,
    SidebarDropdownComponent,
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  encapsulation: ViewEncapsulation.None,
  viewProviders: [
    provideIcons({
      bootstrapSearch,
      bootstrapHouse,
      bootstrapCalendar,
      bootstrapChat,
      bootstrapBriefcase,
      bootstrapBarChart,
      bootstrapBullseye,
      bootstrapBell,
      bootstrapGear,
      bootstrapThreeDots,
      bootstrapXLg,
      bootstrapChevronUp,
      bootstrapCircleFill,
    }),
  ],
})
export class SidebarComponent {
  @Input() logo: string;
  @Input() menuItemsCenter: any;
  @Input() menuItemsBottom: any;
  @Input() htmlContent: string;
  @Output() handleSearch = new EventEmitter<string>();
  @Output() isOpenChanged = new EventEmitter<boolean>(true);
  isOpen = true;
  inputValue: string = '';

  toggleSidebar(event?) {
    event ? (this.isOpen = event) : (this.isOpen = !this.isOpen);
    this.isOpenChanged.emit(this.isOpen);
  }

  onSearch(value: string) {
    this.inputValue = value;
    this.handleSearch.emit(value);
  }
}
