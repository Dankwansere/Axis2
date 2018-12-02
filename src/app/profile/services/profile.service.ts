import { Injectable } from '@angular/core';
import { BaseService } from '../../shared/services/base.service';
import { environment } from '../../../environments/environment';

@Injectable()
export class ProfileService {

    constructor(private baseService: BaseService) {

    }

    public uploadFile(file) {
        // const url = environment.baseUrl + environment.upload;
        const url = 'http://localhost:1850/api/reminder';
        return this.baseService.postRequest(url, file);
    }

}
