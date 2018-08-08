import {NgModule} from '@angular/core';
import { CreateAccountComponent } from './components/create-account.component';
import {MatStepperModule} from '@angular/material/stepper';

@NgModule({
    declarations: [CreateAccountComponent],
    imports: [MatStepperModule],
    exports: [],
    providers: []

})

export class CreateAccountModule {

}
