import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable()
export class LoggerService {


    beacon: Navigator;
    private data: string;
    private date = new Date();
    private url = environment.baseUrl;


    public debug(message: string) {
        this.url = this.url +  environment.loggerDebug;
        this.setFormData(debugType.DEBUG, message);
        navigator.sendBeacon(this.url, this.data.toString());

    }


    public warn(message: string) {
        this.url = this.url +  environment.loggerWarn;
        this.setFormData(debugType.WARNING, message);
        this.beacon.sendBeacon(this.url, this.data);
    }


    public error(message: string) {
        this.url = this.url +  environment.loggerError;
        this.setFormData(debugType.ERROR, message);
        this.beacon.sendBeacon(this.url, this.data);
    }

    private setFormData(logType: debugLvl, message: string) {
         this.data = logType + ': ' + this.date.toString() + message;
    }

}
export enum debugType {
    DEBUG = 'DEBUG',
    WARNING = 'WARNING',
    ERROR = 'ERROR'


}
export type debugLvl = debugType.DEBUG | debugType.WARNING | debugType.ERROR;
