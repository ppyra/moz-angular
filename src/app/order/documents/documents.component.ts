import { Component, OnInit } from '@angular/core';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'order-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss']
})
export class DocumentsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var documentsOffCanvas = document.getElementById('documentsOffCanvas')
    var invoiceOffCanvas = document.getElementById('invoiceOffCanvas')
    documentsOffCanvas.addEventListener('hidden.bs.offcanvas', function (e) {
        var invoiceOffCanvasOffCanvas = new bootstrap.Offcanvas(invoiceOffCanvas)
        invoiceOffCanvasOffCanvas.show()
    })
  }

  openInvoice(e) {

  }

}
