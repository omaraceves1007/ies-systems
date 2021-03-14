import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators'

@Injectable()
export class MyInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if( request.method === 'GET' ){
      return next.handle( request );
    }
    const headers = new HttpHeaders( {
      "Content-Type": "application/json"
    } );

    return next.handle( request.clone( { headers } ) )
                .pipe( catchError( this.errorMessage ) );
  }

  errorMessage( error: HttpErrorResponse ) {
    console.log('Algo salio mal \n', error );
    return throwError( 'Error Inteceptor' );
  }
}
