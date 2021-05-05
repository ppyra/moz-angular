import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from "@ngx-translate/core";
import { ProductOrderService } from '../product/product-add-service/product-add-service.model';
import { ProductItemModel} from '../product/product-item/product-item.model';

@Component({
  selector: 'order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {

  productItemOrder: ProductItemModel;
  productOrderService: ProductOrderService;
  constructor(private translate: TranslateService,
    private route: ActivatedRoute,
    private router: Router) {  }

  ngOnInit(): void {
    this.productItemOrder= {
      imgDescCol: {
      model: 'Philips 70PUS6704/12',
      type:'Telewizor LED',
      serialNo: '1194364',
      colSize: 'col-7'
     },
    showDetailsButton: false,
    showDiscountButton: false,
    cellLabelValue: [
      { value: '3', label: this.translate.instant('product.count'), colSize: 'col-1' },
      { value: '11 456,00 zł', label: this.translate.instant('product.price'), colSize: 'col-2' },
      { value: 'w trakcie', label: this.translate.instant('product.status'), colSize: 'col-2' }
    ]
  }
  }
  close() {
    this.router.navigate(['/']);
  }

  getExtendWarranty(): ProductOrderService {
    this.productOrderService = {
      showIgnoreBtn: false,
    serviceBtn: { show: false, position: 'order-1'},
    warrantyBtn: { show: true, position: '1', class: 'w-100'},
    title: { text: 'Przedłuż Gwarancję® wariant PODSTAWOWY - 5 lat',  colSize: 'col-7'},
    cellLabelValue: [
      { value: '1', label: this.translate.instant('product.count'), colSize: 'col-1'},
      { value: '79,00 zł', label: this.translate.instant('product.price'), colSize: 'col-2'},
      { value: 'w trakcie', label: this.translate.instant('product.status'), colSize: 'col-2'}
    ]
  }
    return this.productOrderService;
  }

  getSocketMax(): ProductOrderService {
    this.productOrderService= {
    showIgnoreBtn: false,
    serviceBtn: { show: false, position: '1'},
    discountBtn: { show: true, position: '1', class: 'w-100'},
    warrantyBtn: { show: false},
    title: { text: 'Pakiet MAX - wniesienie, przykręcenie podstawy, podłączenie, uruchomienie, wyszukanie kanałów cyfrowych', colSize: 'col-7'},
    cellLabelValue: [
      { value: '1', label: this.translate.instant('product.count'), colSize: 'col-1',},
      { value: '79,00 zł', label: this.translate.instant('product.price'), colSize: 'col-2'},
      { value: 'w trakcie', label: this.translate.instant('product.status'), colSize: 'col-2'}
    ]
  }
    return this.productOrderService;
  }
}
