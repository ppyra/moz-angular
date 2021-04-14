import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { TranslateModule } from "@ngx-translate/core";
import { CreateInvoiceDataClitentComponent } from "./create_invoice/create-invoice-data-clitent/create-invoice-data-clitent.component";
import { CreateInvoiceProductsComponent } from "./create_invoice/create-invoice-products/create-invoice-products.component";
import { InvoiceComponent } from "./create_invoice/invoice/invoice.component";
import { DocumentsComponent } from "./documents.component";


@NgModule({
  declarations: [
    CreateInvoiceDataClitentComponent,
    CreateInvoiceProductsComponent,
    InvoiceComponent,
    DocumentsComponent
  ],
  imports: [
      CommonModule,
      FormsModule,
      TranslateModule.forChild()
  ],
  exports: [
    CreateInvoiceDataClitentComponent,
    CreateInvoiceProductsComponent,
    InvoiceComponent,
    DocumentsComponent
  ],
  providers: [],
})
export class DocumentsModule { }
