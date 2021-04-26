import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";
import { ProductDetailsComponent } from "./product-details/product-details.component";
import { PhotoDescriptionComponent } from "./product-item/photo-description/photo-description.component";
import { ProductItemComponent } from "./product-item/product-item.component";
import { ProductOrderListComponent } from './product-order-list/product-order-list.component';

@NgModule({
  declarations: [
    ProductDetailsComponent,
    ProductItemComponent,
    ProductOrderListComponent,
    PhotoDescriptionComponent
  ],
  imports: [
      CommonModule,
      TranslateModule.forChild()
  ],
  exports: [
    ProductDetailsComponent,
    ProductItemComponent
  ],
  providers: [],
})
export class ProductModule { }
