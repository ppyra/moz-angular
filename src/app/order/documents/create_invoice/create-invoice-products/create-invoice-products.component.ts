import { Component, ComponentFactoryResolver, OnInit, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as bootstrap from 'bootstrap';
import { NumberSpinnerComponent } from 'src/app/common/components/number-spinner/number-spinner.component';

@Component({
  selector: 'create-invoice-products',
  templateUrl: './create-invoice-products.component.html',
  styleUrls: ['./create-invoice-products.component.scss']
})
export class CreateInvoiceProductsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    // var createInvoiceProducts = document.getElementById('createInvoiceProducts')
    // var dataClientInvoice = document.getElementById('dataClientInvoice')
    // createInvoiceProducts.addEventListener('hidden.bs.offcanvas', function (e) {
    //     var dataClientInvoiceOffCanvas = new bootstrap.Offcanvas(dataClientInvoice)
    //     dataClientInvoiceOffCanvas.show()
    // })
  }

  confirm() {
    this.router.navigate([{outlets: {canvasOutlet: ['create-invoice-client-data']}}], { relativeTo: this.route.parent })
  }

}
