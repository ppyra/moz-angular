import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { OrderPart } from 'src/app/common/components/offcanvas-bootom/component.model';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit, OnDestroy {

  @Input() orderPart: string;
  OrderPart = OrderPart;
  showDiscountButton: boolean = true;
  showDetailsButton: boolean = true;
  showPieces: boolean = true;
  imgDescCol: string = 'col-3';
  imgWidth: number = 100;
  priceLabel: string;

  ngUnsubscribe = new Subject()

  constructor(private route: ActivatedRoute, private router: Router, private translate: TranslateService) { }

  ngOnInit(): void {
    this.priceLabel = this.translate.instant('product.price');
    // this.route
    //   .data
    //   .pipe(takeUntil(this.ngUnsubscribe))
    //   .subscribe( data =>
    //     {
    //       if(Object.keys(data).length) {
    //         this.showDiscountButton = data['showDetailsButton'];
    //         this.showDetailsButton = data['showDetailsButton'];
    //         this.showPieces = data['showPieces'];
    //         console.log( this.showDiscountButton,this.showDetailsButton);
    //       }

    //     });
    switch (this.orderPart) {
      case OrderPart.INSURANCE:
        this.showDiscountButton = false;
        this.showDetailsButton = false;
        this.showPieces = true;
        this.imgDescCol = 'col-6'
        this.imgWidth = 100;
        this.priceLabel = this.translate.instant('product.sum');
        break;
      case OrderPart.CREATE_INVOICE:
        this.showDiscountButton = false;
        this.showDetailsButton = false;
        this.showPieces = false;
        this.imgDescCol = 'col-4';
        this.priceLabel = this.translate.instant('product.sum');
        break;
      case OrderPart.ORDER_DETAILS:
        this.showDiscountButton = false;
        this.showDetailsButton = false;
        this.showPieces = true;
        this.imgDescCol = 'col-7';
        this.priceLabel = this.translate.instant('product.price');
        break;

    }
  }

  showDetails() {
    this.router.navigate(['canvas', {outlets: {canvasOutlet: ['product-order-list']}}]);
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
