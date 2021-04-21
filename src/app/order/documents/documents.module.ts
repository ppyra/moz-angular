import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";
import { CreateInvoiceDataClitentComponent } from "./create_invoice/create-invoice-data-clitent/create-invoice-data-clitent.component";
import { CreateInvoiceProductsComponent } from "./create_invoice/create-invoice-products/create-invoice-products.component";
import { InvoiceComponent } from "./create_invoice/invoice/invoice.component";
import { DocumentsComponent } from "./documents.component";
import { InvoiceProductItemComponent } from './create_invoice/invoice/invoice-product-item/invoice-product-item.component';
import { CarouselClientDataComponent } from './create_invoice/carousel-client-data/carousel-client-data.component';
import { ClientAddressCardComponent } from './create_invoice/carousel-client-data/client-address-card/client-address-card.component';


@NgModule({
  declarations: [
    CreateInvoiceDataClitentComponent,
    CreateInvoiceProductsComponent,
    InvoiceComponent,
    DocumentsComponent,
    InvoiceProductItemComponent,
    CarouselClientDataComponent,
    ClientAddressCardComponent
  ],
  imports: [
      CommonModule,
      FormsModule,
      RouterModule,
      TranslateModule.forChild()
  ],
  exports: [
    CreateInvoiceDataClitentComponent,
    CreateInvoiceProductsComponent,
    InvoiceComponent,
    DocumentsComponent,
    RouterModule
  ],
  providers: [],
})
export class DocumentsModule { }
