import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { ComponentModel, Height } from "./component.model";

@Injectable({ providedIn: 'root' })
export class CanvasComponentsService {

  public componentSubject = new Subject<ComponentModel>();

  constructor() { }

  open() {
    this.componentSubject.next(new ComponentModel('documents', true, Height.h75));
  }

  loadComponent(component: ComponentModel) {
    this.componentSubject.next(component);
  }
}
