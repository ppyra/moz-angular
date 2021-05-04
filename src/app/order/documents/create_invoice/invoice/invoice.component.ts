import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ProductItemModel } from 'src/app/order/product/product-item/product-item.model';

@Component({
  selector: 'invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {
  productItemOrder: ProductItemModel;
  constructor(private translate: TranslateService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.productItemOrder = {
      imgDescCol: {
      model: 'Philips 70PUS6704/12',
      type:'Telewizor LED',
      serialNo: '1194364',
      colSize: 'col-7'
     },
    showDetailsButton: false,
    showDiscountButton: false,
    cellLabelValue: [
      { value: 'telewizor LED', label: this.translate.instant('invoice.commodity_group'), colSize: 'col-1' },
      { value: '123456', label: this.translate.instant('invoice.plu'), colSize: 'col-1' },
      { value: '3', label: this.translate.instant('product.count'), colSize: 'col-1' },
      { value: '11 456,00 zł', label: this.translate.instant('invoice.unit_price'), colSize: 'col-1' },
      { value: '11 456,00 zł', label: this.translate.instant('product.sum'), colSize: 'col-1' }
    ]
  }
  }

  close() {
    this.router.navigate(['/']);
  }
}
