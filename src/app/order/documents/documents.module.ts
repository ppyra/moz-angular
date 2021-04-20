import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";
//import { CanvasRoutes } from "src/app/common/common-routing.module";
import { CreateInvoiceDataClitentComponent } from "./create_invoice/create-invoice-data-clitent/create-invoice-data-clitent.component";
import { CreateInvoiceProductsComponent } from "./create_invoice/create-invoice-products/create-invoice-products.component";
import { InvoiceComponent } from "./create_invoice/invoice/invoice.component";
import { DocumentsComponent } from "./documents.component";

export const CanvasRoutes: Routes = [
  {
    path: 'canvas',
    children: [
    {
      path: 'documents',
      outlet: "innerOutlet",
      component: DocumentsComponent
    },
    {
      path: 'invoice',
      outlet: "innerOutlet",
      component: InvoiceComponent
    },
    {
      path: '',
      redirectTo: 'documents',
      pathMatch: 'full'
    },
  ]
}
];

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
      RouterModule,//RouterModule.forChild(CanvasRoutes),
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
