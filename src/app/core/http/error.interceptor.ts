import { HttpInterceptor, HttpRequest, HttpHandler, HttpErrorResponse } from "@angular/common/http";
import { Injectable, Injector } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { Observable, throwError as observableThrowError } from "rxjs";
import { catchError } from 'rxjs/operators';
import { NotifierService } from "src/app/common/services/notifier.service";

@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {

    constructor(private translate: TranslateService, private notifier: NotifierService) {

      }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {

        let request = req;

        return next.handle(request).pipe(catchError(err => {
            if (err instanceof HttpErrorResponse ) {

                const businessException = err.headers.get('BusinessException');

                switch (err.status) {
                    case 0:
                        // server-down-message
                        this.notifier.warning(this.translate.instant('notification.server-down-message'), this.translate.instant('notification.server-down'));
                        break;
                    case 200:

                        break;
                    case 400:
                      // bad request
                        switch (businessException) {
                            case 'SomeBusinessCase':
                                // to do
                                this.notifier.warning("some body text", "title");
                                break;
                        }
                        break;
                    case 401:
                        // login-with-valid-credentials
                        if (businessException === 'DisabledAccount') {
                          this.notifier.warning(this.translate.instant('notification.blocked-account-info'),
                              this.translate.instant('notification.blocked-account'));
                      } else {
                          this.notifier.warning(this.translate.instant('notification.login-with-valid-credentials'));
                      }
                        break;
                    case 403:
                        // MissingPermission, access-denied
                        if (businessException === 'PasswordExpired') {
                          this.notifier.warning(this.translate.instant('notification.password-expired-info'));
                      } else if (businessException === 'MissingPermission') {
                          this.notifier.warning(this.translate.instant('notification.access-denied'), err.headers.get('Permission'));
                      }
                        break;
                    case 404:
                        // 404-not-found
                        this.notifier.warning(err.url, this.translate.instant('notification.404-not-found'));
                        break;
                    case 408:
                        // request-timeout
                        this.notifier.warning(this.translate.instant('notification.login-session-expired'));
                    break;
                    case 419:
                        // login-session-expired
                        this.notifier.warning(this.translate.instant('notification.login-session-expired'), this.translate.instant('notification.unauthorized'));
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

