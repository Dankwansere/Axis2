import { Injectable } from '@angular/core';
import { BaseService } from '../shared/services/base.service';
import { environment } from '../../environments/environment';

@Injectable()
export class CreateAccountService {

    constructor(private baseService: BaseService) {

    }

    createUser(body) {
     return  this.baseService.postRequest(environment.baseUrl + environment.register, body);
    }

}
