import { Injectable } from '@angular/core';
import {HttpRequest, HttpHandler, HttpEvent, HttpInterceptor} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const jwtToken = sessionStorage.getItem('authorization');

        if (jwtToken) {
            const request2 = request.clone({
                setHeaders: {
                    'Authorization': 'Bearer ' + jwtToken
                }
            });

            return next.handle(request2);
        } else {
            return next.handle(request);
        }
    }
}
