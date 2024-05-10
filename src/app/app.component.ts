import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { menuItemsCenterData, menuItemsBottomData } from '../app/sidebar/sidebar-config';
import { CommonModule } from '@angular/common';
import {
  bootstrapThreeDots
} from '@ng-icons/bootstrap-icons';
import { NgIconComponent, provideIcons } from '@ng-icons/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgIconComponent, CommonModule, RouterOutlet, SidebarComponent],
  templateUrl: './app.component.html',
  viewProviders: [provideIcons({
    bootstrapThreeDots
  })]

})
export class AppComponent {
  menuItemsCenterData = menuItemsCenterData;
  menuItemsBottomData = menuItemsBottomData;
  isOpen = true;

  isOpenSidebarApp(event?) {
    this.isOpen = event;
  }

  logSearch(event) {
    console.log(event);
  }
}
