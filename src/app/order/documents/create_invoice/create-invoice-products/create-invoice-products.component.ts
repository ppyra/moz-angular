import { Component, OnInit } from '@angular/core';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'create-invoice-products',
  templateUrl: './create-invoice-products.component.html',
  styleUrls: ['./create-invoice-products.component.scss']
})
export class CreateInvoiceProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var createInvoiceProducts = document.getElementById('createInvoiceProducts')
    var dataClientInvoice = document.getElementById('dataClientInvoice')
    createInvoiceProducts.addEventListener('hidden.bs.offcanvas', function (e) {
        var dataClientInvoiceOffCanvas = new bootstrap.Offcanvas(dataClientInvoice)
        dataClientInvoiceOffCanvas.show()
    })
  }

}
