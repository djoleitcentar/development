import { Routes } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: 'home', component: HomeComponent },
    { path: 'calendar', component: SidebarComponent },
    { path: 'messages', component: SidebarComponent },
    { path: 'projects', component: SidebarComponent },
    { path: 'progress', component: SidebarComponent },
    { path: 'goals', component: SidebarComponent },
    { path: 'notifications', component: SidebarComponent },
    { path: 'settings', component: SidebarComponent }
];
