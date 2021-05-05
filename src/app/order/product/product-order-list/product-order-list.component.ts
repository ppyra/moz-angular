import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ProductOrderService } from '../product-add-service/product-add-service.model';

@Component({
  selector: 'product-order-list',
  templateUrl: './product-order-list.component.html',
  styleUrls: ['./product-order-list.component.scss']
})
export class ProductOrderListComponent implements OnInit {

  productOrderService: ProductOrderService;
  constructor(private translate: TranslateService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

  }

  close() {
    this.router.navigate(['/']);
  }

  getExtendWarranty(): ProductOrderService {
    this.productOrderService = {
    showIgnoreBtn: true,
    serviceBtn: { show: false, position: '1'},
    warrantyBtn: { show: true, position: '4'},
    title: { text: 'Przedłuż Gwarancję® wariant PODSTAWOWY - 5 lat',  colSize: 'col-7'},
    cellLabelValue: [
      { value: '380,00 zł', label: this.translate.instant('product.price'), colSize: 'col-1'},
      { value: 'do opłacenia', label: this.translate.instant('product.status'), colSize: 'col-1'}
    ]
  }
    return this.productOrderService;
  }

  getSocketMax(): ProductOrderService {
    this.productOrderService= {
    showIgnoreBtn: false,
    serviceBtn: { show: true, position: '4', class: 'col-2'},
    discountBtn: { show: false},
    warrantyBtn: { show: false},
    title: { text: 'Pakiet MAX - wniesienie, przykręcenie podstawy, podłączenie, uruchomienie, wyszukanie kanałów cyfrowych', colSize: 'col-7'},
    cellLabelValue: [
      { value: '79,00 zł', label: this.translate.instant('product.price'), colSize: 'col-1'},
      { value: 'w trakcie', label: this.translate.instant('product.status'), colSize: 'col-1'}
    ]
  }
    return this.productOrderService;
  }
}
