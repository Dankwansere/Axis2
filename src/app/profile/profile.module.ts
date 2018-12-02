import { ProfileComponent } from './components/profile.component';
import { NgModule } from '@angular/core';
import { LoggerService } from '../shared/services/logger.service';
import { BaseService } from '../shared/services/base.service';
import { ProfileService } from './services/profile.service';

@NgModule({
    declarations: [ProfileComponent],
    imports: [],
    exports: [],
    providers: [ProfileService, BaseService, LoggerService]
})
export class ProfileModule {
}