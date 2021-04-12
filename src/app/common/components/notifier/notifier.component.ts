import { Component, Input, NgZone, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { NotifierService } from '../../services/notifier.service';
import { Notification, NotificationType } from './notifier.model';

@Component({
  selector: 'notifier',
  templateUrl: './notifier.component.html',
  styleUrls: ['./notifier.component.scss']
})
export class NotifierComponent implements OnInit {

    @Input() fade = true;

    notifications: Notification[] = [];
    notificationSubscription: Subscription;
    routeSubscription: Subscription;

    constructor(private router: Router, private notifier: NotifierService) { }

    ngOnInit() {
        this.notificationSubscription = this.notifier.onAlert()
            .subscribe(alert => {
                if (!alert.message) {
                    // filter out alerts without 'keepAfterRouteChange' flag
                    this.notifications = this.notifications.filter(x => x.keepAfterRouteChange);

                    // remove 'keepAfterRouteChange' flag on the rest
                    this.notifications.forEach(x => delete x.keepAfterRouteChange);
                    return;
                }
                this.notifications.push(alert);
                if (alert.autoClose) {
                    setTimeout(() => this.removeNotification(alert), 5000);
                }
           });

        // clear alerts on location change
        this.routeSubscription = this.router.events.subscribe(event => {
            if (event instanceof NavigationStart) {
                this.notifier.clear();
            }
        });
    }

    ngOnDestroy() {
        this.notificationSubscription.unsubscribe();
        this.routeSubscription.unsubscribe();
    }

    removeNotification(alert: Notification) {
        if (!this.notifications.includes(alert)) return;

        if (this.fade) {
            this.notifications.find(x => x === alert).fade = true;
            setTimeout(() => {
                this.notifications = this.notifications.filter(x => x !== alert);
            }, 250);
        } else {
            this.notifications = this.notifications.filter(x => x !== alert);
        }
    }

    cssClass(notifier: Notification) {
        if (!notifier) return;

        const classes = ['alert', 'alert-dismissable'];

        const alertTypeClass = {
            [NotificationType.SUCCESS]: 'alert alert-success',
            [NotificationType.ERROR]: 'alert alert-danger',
            [NotificationType.INFO]: 'alert alert-info',
            [NotificationType.WARN]: 'alert alert-warning'
        }

        classes.push(alertTypeClass[notifier.type]);

        if (notifier.fade) {
            classes.push('fade');
        }

        return classes.join(' ');
    }
}
