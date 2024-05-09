import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
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
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [NgIconComponent, CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  encapsulation: ViewEncapsulation.None,
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
  @Input() logo: string;
  @Input() menuItemsCenter: any;
  @Input() menuItemsBottom: any;
  @Input() htmlContent: string;
  @Output() inputValueChange = new EventEmitter<string>();
  inputValue: string = '';
  isOpen = true;
  // isDropdownOpen = false;

  constructor(private sanitizer: DomSanitizer ) {}

  sanitizeHtml(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
  
  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  onSearch(value: string) {
    this.inputValue = value;
    this.inputValueChange.emit(value);
  }

  // toggleDropdown() {
  //   this.isDropdownOpen = !this.isDropdownOpen;
  // }
}
