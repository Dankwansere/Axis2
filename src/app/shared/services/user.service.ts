import { Injectable } from '@angular/core';
import { SessionStorage } from '../security/session-storage';
import { Constants } from '../../commons/constants';
import { AxisLoginResponse, User } from '../../commons/Interface/response.interface';
import { LoggerService } from './logger.service';


@Injectable()
export class UserService {

    private user: User;
    constructor(private loggerService: LoggerService) {

    }

    public isUserLoggedIn(): boolean {
      this.getUserObject();
        if (this.user) {
            return true;
        } else {
            return false;
        }
    }

    public getUserName(): string {
        this.getUserObject();

        try {
            return this.user.username;
        } catch (err) {
            console.log('unexpected error, log sent to server');
            this.loggerService.error(err);
            return null;

        }

    }

    public getUserFullName(): string {
        this.getUserObject();
        const userFullName = this.user.firstname + ' ' + this.user.lastname;

        return userFullName;

    }

    private getUserObject(): void {
        this.user = JSON.parse(SessionStorage.returnDataFromSession(Constants.USER_SESSION_KEY));

    }

}
