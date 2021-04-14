export class Notification {
  type: NotificationType;
  title: string;
  message: string;
  autoClose: boolean;
  keepAfterRouteChange: boolean;
  fade: boolean;

  constructor(type: NotificationType, message?: string, title?: string, autoClose?: boolean, fade?: boolean, keepAfterRouteChange?: boolean) {
    this.type = type;
    this.message = message;
    this.title = title;
    this.autoClose = autoClose;
    this.fade = fade;
    this.keepAfterRouteChange = keepAfterRouteChange;
  }
}

export enum NotificationType {
  ERROR, WARN, INFO, SUCCESS
}
