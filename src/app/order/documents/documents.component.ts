import { ComponentFactoryResolver } from '@angular/core';
import { ViewContainerRef } from '@angular/core';
import { Component, OnInit, ViewChild } from '@angular/core';
import * as bootstrap from 'bootstrap';


@Component({
  selector: 'order-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss']
})
export class DocumentsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var offcanvasBottom = document.getElementById('documentsOffCanvas')
var secondoffcanvas = document.getElementById('invoiceOffCanvas')
    offcanvasBottom.addEventListener('hidden.bs.offcanvas', function (e) {
        var bsOffcanvas2 = new bootstrap.Offcanvas(secondoffcanvas)
        bsOffcanvas2.show()
        this.clickedInvoiceDetails = false;
    })
  }

  openInvoice(e) {

  }

}
