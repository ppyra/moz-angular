import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ProductItemModel} from 'src/app/order/product/product-item/product-item.model';

@Component({
  selector: 'create-invoice-products',
  templateUrl: './create-invoice-products.component.html',
  styleUrls: ['./create-invoice-products.component.scss']
})
export class CreateInvoiceProductsComponent implements OnInit {

  productItemOrder: ProductItemModel;
  constructor(private route: ActivatedRoute, private router: Router, private translate: TranslateService) { }

  ngOnInit(): void {
    this.productItemOrder = {
      imgDescCol: {
      model: 'Philips 70PUS6704/12',
      type:'Telewizor LED',
      serialNo: '1194364',
      colSize: 'col-6'
     },
    showDetailsButton: false,
    showDiscountButton: false,
    cellLabelValue: [
      { value: '11 456,00 zł', label: this.translate.instant('product.sum'), colSize: 'col-1' },
      { value: 'w trakcie', label: this.translate.instant('product.status'), colSize: 'col-2' }
    ]
  }
}

  confirm() {
    this.router.navigate([{outlets: {canvasOutlet: ['create-invoice-client-data']}}], { relativeTo: this.route.parent })
  }

  close() {
    this.router.navigate(['/']);
  }
}
