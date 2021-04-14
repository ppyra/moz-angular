import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CanvasComponentsService } from './canvas-components.service';
import { ComponentModel } from './component.model';

@Component({
  selector: 'offcanvas-bootom',
  templateUrl: './offcanvas-bootom.component.html',
  styleUrls: ['./offcanvas-bootom.component.scss']
})
export class OffcanvasBootomComponent implements OnInit {

  modelComponent: ComponentModel;
  isOpen = false;
  activeComponent = 'documents';
  constructor(private canvasComponentsService: CanvasComponentsService) { }

  ngOnInit(): void {
    this.canvasComponentsService.componentSubject.subscribe((model: ComponentModel) => {
      this.modelComponent = model;
      if (model.open) {
        this.activeComponent = model.component;
        this.isOpen = true;
      }
    })
  }
}

