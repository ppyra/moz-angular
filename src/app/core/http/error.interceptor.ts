import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from "@angular/common/http";
import { Injectable, Injector } from "@angular/core";
import { Observable, throwError as observableThrowError } from "rxjs";
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {

    constructor(private injector: Injector ) {    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {

        let request = req;

        return next.handle(request).pipe(catchError(err => {
            if (err instanceof HttpErrorResponse ) {

                const businessException = err.headers.get('BusinessException');

                switch (err.status) {
                    case 0:
                        // server-down-message
                        break;
                    case 200:

                        break;
                    case 400:
                      // bad request
                        switch (businessException) {
                            case 'SomeBusinessCase':
                                // to do
                                break;
                        }
                        break;
                    case 401:
                        // login-with-valid-credentials
                        break;
                    case 403:
                        // MissingPermission, access-denied
                        break;
                    case 404:
                        // 404-not-found
                        break;
                    case 408:
                        // request-timeout
                    break;
                    case 419:
                        // login-session-expired
                        break;
                    case 502:
                        // login-session-expired
                        break;
                    case 504:
                        // not-responding
                        break;

                    default: {
                        // inform about unrecognized error
                    }
                }
            }
            return observableThrowError({ ...err, handled: true });
        }));
    }
}

