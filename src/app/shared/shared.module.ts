import {NgModule} from '@angular/core';
import { SpinnerComponent } from './spinner/components/spinner.component';
import {PasswordComponent} from './password/components/password.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { BaseComponent } from './base/component/base.component';

@NgModule ({
    declarations: [SpinnerComponent, PasswordComponent, BaseComponent],
    imports: [MatProgressSpinnerModule],
    exports: [SpinnerComponent, PasswordComponent],
    providers: []
})
export class SharedModule {
}
