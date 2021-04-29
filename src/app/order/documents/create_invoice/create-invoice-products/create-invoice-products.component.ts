import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ProductItemModel, ImageDescriptionProduct, CellLabelValue } from 'src/app/order/product/product-item/product-item.model';

@Component({
  selector: 'create-invoice-products',
  templateUrl: './create-invoice-products.component.html',
  styleUrls: ['./create-invoice-products.component.scss']
})
export class CreateInvoiceProductsComponent implements OnInit {

  productItemOrder: ProductItemModel;
  constructor(private route: ActivatedRoute, private router: Router, private translate: TranslateService) { }

  ngOnInit(): void {
    this.productItemOrder = new ProductItemModel();
    this.productItemOrder.imgDescCol = new ImageDescriptionProduct('Philips 70PUS6704/12', 'Telewizor LED', '1194364', 'col-6');
    this.productItemOrder.showDetailsButton = false;
    this.productItemOrder.showDiscountButton = false;
    this.productItemOrder.cellLabelValue = [
      new CellLabelValue('11 456,00 zł', this.translate.instant('product.sum'), 'col-1'),
      new CellLabelValue('w trakcie', this.translate.instant('product.status'), 'col-2')
    ];
  }

  confirm() {
    this.router.navigate([{outlets: {canvasOutlet: ['create-invoice-client-data']}}], { relativeTo: this.route.parent })
  }

}
