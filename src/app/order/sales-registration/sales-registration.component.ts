import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ProductItemModel} from '../product/product-item/product-item.model';

@Component({
  selector: 'app-sales-registration',
  templateUrl: './sales-registration.component.html',
  styleUrls: ['./sales-registration.component.scss']
})
export class SalesRegistrationComponent implements OnInit {

  productItemOrder: ProductItemModel;
  constructor(private translate: TranslateService) { }

  ngOnInit(): void {
   this.productItemOrder= {
    imgDescCol: {
      model: 'Philips 70PUS6704/12',
      type:'Telewizor LED',
      serialNo: '1194364',
      colSize: 'col-4'
    },
    showDetailsButton: true,
    showDiscountButton: true,
    cellLabelValue: [
      { value: '3', label: this.translate.instant('product.count'), colSize: 'col-1' },
      { value: '11 456,00 zł', label: this.translate.instant('product.sum'), colSize: 'col-1' },
      { value: 'w trakcie', label: this.translate.instant('product.status'), colSize: 'col-2' }
    ]
    }
  }
}
