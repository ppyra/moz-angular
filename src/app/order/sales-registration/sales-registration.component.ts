import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ProductItemModel, CellLabelValue, ImageDescriptionProduct } from '../product/product-item/product-item.model';
//import { CellLabelValue, ComponentModel } from 'src/app/common/components/offcanvas-bootom/component.model';

@Component({
  selector: 'app-sales-registration',
  templateUrl: './sales-registration.component.html',
  styleUrls: ['./sales-registration.component.scss']
})
export class SalesRegistrationComponent implements OnInit {

  productItemOrder: ProductItemModel;
  constructor(private translate: TranslateService) { }

  ngOnInit(): void {
   this.productItemOrder = new ProductItemModel();
   this.productItemOrder.imgDescCol = new ImageDescriptionProduct('Philips 70PUS6704/12', 'Telewizor LED', '1194364', 'col-4');
   this.productItemOrder.showDetailsButton = true;
   this.productItemOrder.showDiscountButton = true;
   this.productItemOrder.cellLabelValue = [
     new CellLabelValue('3', this.translate.instant('product.count'), 'col-1'),
     new CellLabelValue('11 456,00 zł', this.translate.instant('product.sum'), 'col-1'),
     new CellLabelValue('w trakcie', this.translate.instant('product.status'), 'col-2')
   ];
  }

}
