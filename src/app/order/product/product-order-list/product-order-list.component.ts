import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ProductOrderService } from '../product-add-service/product-add-service.model';
import { CellLabelValue } from '../product-item/product-item.model';

@Component({
  selector: 'product-order-list',
  templateUrl: './product-order-list.component.html',
  styleUrls: ['./product-order-list.component.scss']
})
export class ProductOrderListComponent implements OnInit {

  productOrderService: ProductOrderService;
  constructor(private translate: TranslateService) { }

  ngOnInit(): void {
    
  }

  getExtendWarranty(): ProductOrderService {
    this.productOrderService = new ProductOrderService();
    this.productOrderService.showIgnoreBtn = true;
    this.productOrderService.showServiceBtn = false;
    this.productOrderService.showWarrantyBtn = true;
    this.productOrderService.title = 'Przedłuż Gwarancję® wariant PODSTAWOWY - 5 lat';
    this.productOrderService.cellLabelValue = [
      new CellLabelValue('380,00 zł', this.translate.instant('product.price')),
      new CellLabelValue('do opłacenia', this.translate.instant('product.status')),
    ];
    return this.productOrderService;
  }

  getSocketMax(): ProductOrderService {
    this.productOrderService = new ProductOrderService();
    this.productOrderService.showIgnoreBtn = false;
    this.productOrderService.showServiceBtn = true;
    this.productOrderService.showWarrantyBtn = false;
    this.productOrderService.title = 'Pakiet MAX - wniesienie, przykręcenie podstawy, podłączenie, uruchomienie, wyszukanie kanałów cyfrowych';
    this.productOrderService.cellLabelValue = [
      new CellLabelValue('79,00 zł', this.translate.instant('product.price')),
      new CellLabelValue('w trakcie', this.translate.instant('product.status')),
    ];
    return this.productOrderService;
  }
}
