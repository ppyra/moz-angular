import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";
import { ComponentModel } from 'src/app/common/components/offcanvas-bootom/component.model';
import { ComponentModelService } from 'src/app/common/components/offcanvas-bootom/component.model.service';

@Component({
  selector: 'order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {

  @Output() componentHeader = new EventEmitter<ComponentModel>();
  constructor(private translate: TranslateService, private componentModelService: ComponentModelService) {
    // this.componentHeader.emit(new ComponentModel(this.translate.instant('product.details'), 'Philips 70PUS6704/12'));
    componentModelService.loadComponent(new ComponentModel(this.translate.instant('product.details'), 'Philips 70PUS6704/12'));
    //this.componentHeader = new ComponentModel(this.translate.instant('product.details'), 'Philips 70PUS6704/12');
  }

  ngOnInit(): void {
  }

}
