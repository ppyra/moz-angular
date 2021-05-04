import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from "@ngx-translate/core";
import { ProductItemModel} from '../product/product-item/product-item.model';

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
}
