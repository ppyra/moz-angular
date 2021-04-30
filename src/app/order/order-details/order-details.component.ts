import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from "@ngx-translate/core";
import { ProductItemModel, ImageDescriptionProduct, CellLabelValue } from '../product/product-item/product-item.model';

@Component({
  selector: 'order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {

  productItemOrder: ProductItemModel;
  constructor(private translate: TranslateService,
    private route: ActivatedRoute,
    private router: Router) {  }

  ngOnInit(): void {
    this.productItemOrder = new ProductItemModel();
    this.productItemOrder.imgDescCol = new ImageDescriptionProduct('Philips 70PUS6704/12', 'Telewizor LED', '1194364', 'col-7');
    this.productItemOrder.showDetailsButton = false;
    this.productItemOrder.showDiscountButton = false;
    this.productItemOrder.cellLabelValue = [
      new CellLabelValue('3', this.translate.instant('product.count'), 'col-1'),
      new CellLabelValue('11 456,00 zł', this.translate.instant('product.price'), 'col-2'),
      new CellLabelValue('w trakcie', this.translate.instant('product.status'), 'col-2')
    ];
  }
  close() {
    this.router.navigate(['/']);
  }
}
