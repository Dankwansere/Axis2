import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import { SpinnerComponent } from './spinner/components/spinner.component';
import {PasswordComponent} from './password/components/password.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatInputModule} from '@angular/material/input';
import { BaseComponent } from './base/component/base.component';

@NgModule ({
    declarations: [SpinnerComponent, PasswordComponent, BaseComponent],
    imports: [CommonModule, MatInputModule, ReactiveFormsModule, MatProgressSpinnerModule],
    exports: [SpinnerComponent, PasswordComponent],
    providers: []
})
export class SharedModule {
}
