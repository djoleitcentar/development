import { NgClass } from '@angular/common';
import { Component, ElementRef, HostListener } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgClass, RouterLink],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  isDropdownOpen: boolean = false;

  constructor(
    private loginService: LoginService,
    private elementRef: ElementRef
  ) {}

  @HostListener('click')
  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  @HostListener('document:click', ['$event'])
  handleClickOutside(event) {
    if (
      this.isDropdownOpen &&
      !this.elementRef.nativeElement.contains(event.target)
    ) {
      this.isDropdownOpen = false;
    }
  }

  logout() {
    this.loginService.logout();
  }
}
