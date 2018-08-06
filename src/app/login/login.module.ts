import { NgModule } from '@angular/core';
import {LoginComponent} from './components/login.component';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import {LoginService} from './services/login.service';
import {BaseService} from '../shared/services/base.service';

@NgModule({
    declarations: [LoginComponent],
    imports: [ReactiveFormsModule, MatInputModule,  MatButtonModule],
    exports: [],
    providers: [LoginService, BaseService]
})
export class LoginModule {

}
