import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import {
  bootstrapThreeDots
} from '@ng-icons/bootstrap-icons';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { menuItemsCenterData, menuItemsBottomData } from '../../app/sidebar/sidebar-config';

@Component({
  selector: 'app-homelayout',
  standalone: true,
  imports: [RouterOutlet, CommonModule, NgIconComponent, SidebarComponent],
  templateUrl: './homelayout.component.html',
  viewProviders: [provideIcons({
    bootstrapThreeDots
  })]
})
export class HomelayoutComponent {
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
