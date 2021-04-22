import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit, OnDestroy {

  showDiscountButton: boolean = true;
  showDetailsButton: boolean = true;
  ngUnsubscribe = new Subject()

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route
      .data
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe( data =>
        {
          this.showDiscountButton = data['showDetailsButton'];
          this.showDetailsButton = data['showDetailsButton'];
        });
  }

  showDetails() {
    this.router.navigate(['canvas', {outlets: {canvasOutlet: ['product-order-list']}}]);
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
