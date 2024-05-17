import { Routes } from '@angular/router';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
import { LoginComponent } from './login/login.component';
import { HomelayoutComponent } from './homelayout/homelayout.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { UsersComponent } from './users/users.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'homelayout' },
    { path: 'login', component: LoginComponent },
    { path: 'homelayout', component: HomelayoutComponent, canActivate: [AuthGuard], children: [
        { path: 'home', component: HomeComponent },
        { path: 'form', component: FormComponent },
        { path: 'messages', component: SidebarComponent },
        { path: 'projects', component: SidebarComponent },
        { path: 'users', component: UsersComponent },
        { path: 'goals', component: SidebarComponent },
        { path: 'notifications', component: SidebarComponent },
        { path: 'settings', component: SidebarComponent }
    ]},
    { path: '**', redirectTo: '/'}
];
