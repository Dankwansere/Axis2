import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { CreateAccountComponent } from './components/create-account.component';
import {MatStepperModule} from '@angular/material/stepper';
import {SharedModule} from '../shared/shared.module';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
@NgModule({
    declarations: [CreateAccountComponent],
    imports: [CommonModule, MatButtonModule, MatStepperModule, MatSelectModule, MatInputModule, SharedModule],
    exports: [],
    providers: []

})

export class CreateAccountModule {

}
