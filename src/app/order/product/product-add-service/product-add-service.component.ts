import { Component, Input, OnInit } from '@angular/core';
import { ProductOrderService } from './product-add-service.model';

@Component({
  selector: 'product-add-service',
  templateUrl: './product-add-service.component.html',
  styleUrls: ['./product-add-service.component.scss']
})
export class ProductAddServiceComponent implements OnInit {

  @Input() productOrderService: ProductOrderService;
  constructor() { }

  ngOnInit() {
  }

}
