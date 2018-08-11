import { Injectable } from '@angular/core';
import { BaseService } from '../../shared/services/base.service';
import { HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class LoginService {

    ops = {
        params: new HttpParams()
    };

    constructor(private baseService: BaseService) {}

    public login(body) {
        console.log(environment.baseUrl + environment.login);
        return this.baseService.postRequest(environment.baseUrl + environment.login, body);
    }
}
