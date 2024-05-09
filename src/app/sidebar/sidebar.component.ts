import { Component } from '@angular/core';
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
  bootstrapCircleFill
} from '@ng-icons/bootstrap-icons';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { menuItemsCenterData, menuItemsBottomData } from './sidebar-config';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [NgIconComponent, CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  viewProviders: [provideIcons({
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
    bootstrapCircleFill
  })]
})
export class SidebarComponent {
  isOpen = true;
  // isDropdownOpen = false;
  menuItemsCenter = menuItemsCenterData;
  menuItemsBottom = menuItemsBottomData;


  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  // toggleDropdown() {
  //   this.isDropdownOpen = !this.isDropdownOpen;
  // }
}
