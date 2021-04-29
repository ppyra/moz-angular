import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CellLabelValue, ImageDescriptionProduct, ProductItemModel } from 'src/app/order/product/product-item/product-item.model';

@Component({
  selector: 'invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {
  productItemOrder: ProductItemModel;
  constructor(private translate: TranslateService) { }

  ngOnInit(): void {
    this.productItemOrder = new ProductItemModel();
    this.productItemOrder.imgDescCol = new ImageDescriptionProduct('Philips 70PUS6704/12', 'Nazwa produktu', '', 'col-7');
    this.productItemOrder.showDetailsButton = false;
    this.productItemOrder.showDiscountButton = false;
    this.productItemOrder.cellLabelValue = [
      new CellLabelValue('telewizor LED', this.translate.instant('invoice.commodity_group'), 'col-1'),
      new CellLabelValue('123456', this.translate.instant('invoice.plu'), 'col-1'),
      new CellLabelValue('3', this.translate.instant('product.count'), 'col-1'),
      new CellLabelValue('11 456,00 zł', this.translate.instant('invoice.unit_price'), 'col-1'),
      new CellLabelValue('11 456,00 zł', this.translate.instant('product.sum'), 'col-1'),
    ];
  }

}
