import { Component, Output } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { menuItemsCenterData, menuItemsBottomData } from '../app/sidebar/sidebar-config';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent],
  templateUrl: './app.component.html'

})
export class AppComponent {
  @Output() menuItemsCenterData = menuItemsCenterData;
  @Output() menuItemsBottomData = menuItemsBottomData;
  @Output() htmlContent: string = '<div class="sidebar__profile-details"><img class="avatar" src="../../assets/avatar.svg" alt="avatar"><p id="nameElement" class="item-name" [ngClass]="!isOpen ? "open" : null">Jane Cooper</p></div><ng-icon class="icon-dots" name="bootstrapThreeDots" [ngClass]="!isOpen ? "open" : null"></ng-icon>'
}
