import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";
import { SharedModule } from "src/app/common/common.module";
import { ProductAddServiceComponent } from "./product-add-service/product-add-service.component";
import { ProductDetailsComponent } from "./product-details/product-details.component";
import { PhotoDescriptionComponent } from "./product-item/photo-description/photo-description.component";
import { ProductItemComponent } from "./product-item/product-item.component";
import { ProductOrderListComponent } from './product-order-list/product-order-list.component';

@NgModule({
  declarations: [
    ProductDetailsComponent,
    ProductItemComponent,
    ProductOrderListComponent,
    PhotoDescriptionComponent,
    ProductAddServiceComponent
  ],
  imports: [
      CommonModule,
      SharedModule,
      TranslateModule.forChild()
  ],
  exports: [
    ProductDetailsComponent,
    ProductItemComponent,
    PhotoDescriptionComponent
  ],
  providers: [],
})
export class ProductModule { }
