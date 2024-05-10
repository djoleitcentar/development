import { Component } from '@angular/core';
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
  menuItemsCenterData = menuItemsCenterData;
  menuItemsBottomData = menuItemsBottomData;

  logSearch(event) {
    console.log(event);
  }
}
