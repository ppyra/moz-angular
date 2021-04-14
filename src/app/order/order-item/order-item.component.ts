import { Component, OnInit } from '@angular/core';
import { CanvasComponentsService } from 'src/app/common/components/offcanvas-bootom/canvas-components.service';
import { NotifierService } from 'src/app/common/services/notifier.service';

@Component({
  selector: 'order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.scss']
})
export class OrderItemComponent implements OnInit {

  constructor(protected notifierService: NotifierService, private canvasComponentsService: CanvasComponentsService) { }

  ngOnInit(): void {
  }

  showNotifier() {
    this.notifierService.success("some alert", 'title', true);
  }

  addGuarantee() {

  }

  showDocuments() {
    this.canvasComponentsService.open();
  }
}
