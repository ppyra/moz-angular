import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as bootstrap from 'bootstrap';
//import { CanvasComponentsService } from 'src/app/common/components/offcanvas-bootom/component.model.service';
//import { ComponentModel, Height } from 'src/app/common/components/offcanvas-bootom/component.model';

@Component({
  selector: 'order-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss']
})
export class DocumentsComponent implements OnInit {


  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    // var documentsOffCanvas = document.getElementById('documentsOffCanvas')
    // var invoiceOffCanvas = document.getElementById('invoiceOffCanvas')
    // documentsOffCanvas.addEventListener('hidden.bs.offcanvas', function (e) {
    //     var invoiceOffCanvasOffCanvas = new bootstrap.Offcanvas(invoiceOffCanvas)
    //     invoiceOffCanvasOffCanvas.show()
    // })
  }

  openInvoice() {
    this.router.navigate([{outlets: {canvasOutlet: ['invoice']}}], { relativeTo: this.route.parent })
    //this.canvasComponentsService.loadComponent(new ComponentModel('details', true, Height.h25));
  }

}
