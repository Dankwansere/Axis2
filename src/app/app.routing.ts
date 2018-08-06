import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './login/components/login.component';
import {HomeComponent} from './home/home.component';

export const routing = RouterModule.forRoot([
    {path: 'login', component: LoginComponent},
    {path: 'home', component: HomeComponent}
 ]);
