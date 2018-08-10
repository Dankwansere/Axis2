import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { environment } from 'environments/environment';

@Injectable()
export class CommonServices {

    constructor(private baseService: BaseService) {}

    public validateUsername(username: string) {
        return this.baseService.getRequest(environment.baseUrl + environment.validateUsername + username);
    }

}
