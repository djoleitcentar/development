import { Routes } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
import { LoginComponent } from './login/login.component';
import { HomelayoutComponent } from './homelayout/homelayout.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'homelayout' },
    { path: 'homelayout', component: HomelayoutComponent, children: [
        { path: 'home', component: HomeComponent },
        { path: 'form', component: FormComponent },
        { path: 'messages', component: SidebarComponent },
        { path: 'projects', component: SidebarComponent },
        { path: 'progress', component: SidebarComponent },
        { path: 'goals', component: SidebarComponent },
        { path: 'notifications', component: SidebarComponent },
        { path: 'settings', component: SidebarComponent }
    ]},
    { path: 'login', component: LoginComponent }
];
