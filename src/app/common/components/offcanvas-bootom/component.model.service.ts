import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { ComponentModel } from "./component.model";


@Injectable({ providedIn: 'root' })
export class ComponentModelService {

  public componentSubject = new Subject<ComponentModel>();

  constructor() { }

  getComponentDesc(): Observable<ComponentModel> {
    return this.componentSubject.asObservable();
  }

  loadComponentDesc(component: ComponentModel) {
    this.componentSubject.next(component);
  }
}
