import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductItemModel } from './product-item.model';

@Component({
  selector: 'product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  @Input() productItemModel: ProductItemModel;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  showDetails() {
    this.router.navigate(['canvas', {outlets: {canvasOutlet: ['product-order-list']}}]);
  }
}
