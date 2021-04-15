import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CanvasComponentsService } from 'src/app/common/components/offcanvas-bootom/canvas-components.service';
import { NotifierService } from 'src/app/common/services/notifier.service';
import * as bootstrap from 'bootstrap';
@Component({
  selector: 'order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.scss']
})
export class OrderItemComponent implements OnInit {

  constructor(protected notifierService: NotifierService, private canvasComponentsService: CanvasComponentsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  showNotifier() {
    this.notifierService.success("some alert", 'title', true);
  }

  addGuarantee() {

  }

  showDocuments() {
    //this.canvasComponentsService.open();
    //var invoiceOffCanvas = document.getElementById('offcanvasWrapper');
    //var invoiceOffCanvasOffCanvas = new bootstrap.Offcanvas(invoiceOffCanvas);
    //invoiceOffCanvasOffCanvas.show();
    this.router.navigate(['canvas'], { relativeTo: this.route })
  }
}
