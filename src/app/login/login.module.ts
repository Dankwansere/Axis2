import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './components/login.component';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import {LoginService} from './services/login.service';
import {BaseService} from '../shared/services/base.service';
import {SharedModule} from '../shared/shared.module';
@NgModule({
    declarations: [LoginComponent],
    imports: [ReactiveFormsModule, CommonModule, SharedModule, MatInputModule,  MatButtonModule],
    exports: [],
    providers: [LoginService, BaseService]
})
export class LoginModule {

}
