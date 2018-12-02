import {Route} from '@angular/router';
import {LoginComponent} from './login/components/login.component';
import {HomeComponent} from './home/components/home.component';
import { CreateAccountComponent } from './create-account/components/create-account.component';
import { ProfileComponent } from './profile/components/profile.component';

export const routing: Route[] = [
    {path: 'login', component: LoginComponent},
    {path: 'home', component: HomeComponent},
    {path: 'create', component: CreateAccountComponent},
    {path: 'profile', component: ProfileComponent},
 ];

