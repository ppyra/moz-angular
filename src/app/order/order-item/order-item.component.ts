import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
//import { CanvasComponentsService } from 'src/app/common/components/offcanvas-bootom/component.model.service';
import { NotifierService } from 'src/app/common/services/notifier.service';
import * as bootstrap from 'bootstrap';
@Component({
  selector: 'order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.scss']
})
export class OrderItemComponent implements OnInit {

  constructor(protected notifierService: NotifierService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  issueAnInvoice() {
    this.router.navigate(['canvas', {outlets: {canvasOutlet: ['create-invoice']}}]);
  }

  showNotifier() {
    this.notifierService.success("some alert", 'title', true);
  }

  addGuarantee() {
    this.router.navigate(['canvas', {outlets: {canvasOutlet: ['insurance']}}]);
  }

  showDocuments() {
    //this.canvasComponentsService.open();
    //var invoiceOffCanvas = document.getElementById('offcanvasWrapper');
    //var invoiceOffCanvasOffCanvas = new bootstrap.Offcanvas(invoiceOffCanvas);
    //invoiceOffCanvasOffCanvas.show();
    this.router.navigate(['canvas', {outlets: {canvasOutlet: ['documents']}}]); //, { relativeTo: this.route.parent })
    //this.router.navigate(['canvas'], { relativeTo: this.route })
  }
}
