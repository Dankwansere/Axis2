
import {Injectable} from '@angular/core';
import {RequestOptions, Headers} from '@angular/http';
import {HttpClient, HttpHeaders, HttpErrorResponse, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import 'rxjs';
import { throwError } from 'rxjs/internal/observable/throwError';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class BaseService {

     httpOptions: any = {
        headers: new HttpHeaders({
            'Content-Type':  'application/json',
            'Authorization': 'my-auth-token'
          })
    };

    constructor(private http: HttpClient) {
    }

    public getRequest(url: string, param?: HttpParams) {
        this.httpOptions.params = param;
        try {
            if (param) {
            //    return this.http.get(url,).pipe(
            //        catchError(this.handleError)
            //    );
            } else {
               return this.http.get(url, this.httpOptions).pipe(
                catchError(this.handleError)
            );
            }
        } catch (error) {
        }
    }

    public postRequest(url: string, body: any, optionalHeaders?: HttpHeaders) {
        return this.http.post(url, body, this.httpOptions).pipe(
            catchError(this.handleError)
        );
    }


    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
          // A client-side or network error occurred. Handle it accordingly.
          console.error('An error occurred:', error.error.message);
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          console.error(
            `Backend returned code ${error.status}, ` +
            `body was: ${error.error}`);
        }
        // return an observable with a user-facing error message
        return throwError(
          'Something bad happened; please try again later.');
      }
}
