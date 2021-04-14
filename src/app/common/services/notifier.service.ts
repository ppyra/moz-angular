import { Injectable } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { Observable } from "rxjs";
import { Subject, BehaviorSubject } from "rxjs";
import { filter } from "rxjs/operators";
import { Notification, NotificationType } from "../components/notifier/notifier.model";

@Injectable({
  providedIn: 'root'
})
export class NotifierService {

  private subject = new Subject<Notification>();

    // enable subscribing to notification observable
    onAlert(): Observable<Notification> {
        return this.subject.asObservable();
    }

    // convenience methods
    success(message?: string, title?: string, autoClose?: boolean, fade?: boolean, keepAfterRouteChange?: boolean) {
        this.alert(new Notification(NotificationType.SUCCESS, message, title, autoClose, fade, keepAfterRouteChange));
    }

    error(message?: string, title?: string, autoClose?: boolean, fade?: boolean, keepAfterRouteChange?: boolean) {
        this.alert(new Notification(NotificationType.ERROR, message, title, autoClose, fade, keepAfterRouteChange));
    }

    info(message?: string, title?: string, autoClose?: boolean, fade?: boolean, keepAfterRouteChange?: boolean) {
        this.alert(new Notification(NotificationType.INFO, message, title, autoClose, fade, keepAfterRouteChange));
    }

    warning(message?: string, title?: string, autoClose?: boolean, fade?: boolean, keepAfterRouteChange?: boolean) {
        this.alert(new Notification(NotificationType.WARN, message, title, autoClose, fade, keepAfterRouteChange));
    }

     // main alert method
    alert(alert: Notification) {
      this.subject.next(alert);
    }

  // clear alerts
  clear() {
      this.subject.next(new Notification(NotificationType.INFO));
  }

}
