import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";
import { ProductDetailsComponent } from "./product-details/product-details.component";
import { ProductItemComponent } from "./product-item/product-item.component";

@NgModule({
  declarations: [
    ProductDetailsComponent,
    ProductItemComponent
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
