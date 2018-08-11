import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { environment } from 'environments/environment';

@Injectable()
export class CommonServices {

    constructor(private baseService: BaseService) {}

    public validateSingleInfo(body) {
        return this.baseService.postRequest(environment.baseUrl + environment.validateSingleInfo, body);
    }

}
