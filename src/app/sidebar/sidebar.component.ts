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
  open = true;
  dropdown = false;

  menuItemsCenter = [
    {
      name: 'Home',
      icon: 'bootstrapHouse',
      route: 'home'
    },
    {
      name: 'Calendar',
      icon: 'bootstrapCalendar',
      route: 'calendar'
    },
    {
      name: 'Messages',
      icon: 'bootstrapChat',
      route: 'messages'
    },
    {
      name: 'Projects',
      icon: 'bootstrapBriefcase',
      route: 'projects',
      options: [
        {
          name: 'Google',
          color: '#f39c4f'
        },
        {
          name: 'Amazon',
          color: '#ec5a5a'
        },
        {
          name: 'Facebook',
          color: '#2e9c5d'
        },
        {
          name: 'Airbnb',
          color: '#329fdc'
        }
      ]
    },
    {
      name: 'Progress',
      icon: 'bootstrapBarChart',
      route: 'progress'
    },
    {
      name: 'Goals',
      icon: 'bootstrapBullseye',
      route: 'goals'
    }
  ]

  menuItemsBottom = [
    {
      name: 'Notifications',
      icon: 'bootstrapBell',
      route: 'notifications'
    },
    {
      name: 'Settings',
      icon: 'bootstrapGear',
      route: 'settings'
    }
  ]

  toggleSidebar(open: boolean) {
    if (open) {
      this.open = true;
    } else {
      this.open = !this.open;
    }
  }

  toggleDropdown() {
    this.dropdown = !this.dropdown;
  }
}
