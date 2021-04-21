import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CreateInvoiceDataClitentComponent } from "../order/documents/create_invoice/create-invoice-data-clitent/create-invoice-data-clitent.component";
import { CreateInvoiceProductsComponent } from "../order/documents/create_invoice/create-invoice-products/create-invoice-products.component";
import { InvoiceComponent } from "../order/documents/create_invoice/invoice/invoice.component";
import { DocumentsComponent } from "../order/documents/documents.component";
import { OrderDetailsComponent } from "../order/order-details/order-details.component";
import { ProductDetailsComponent } from "../order/product/product-details/product-details.component";

export const CanvasRoutes: Routes = [
  {
    path: 'canvas',
    children: [
    {
      path: 'documents',
      outlet: "canvasOutlet",
      component: DocumentsComponent
    },
    {
      path: 'invoice',
      outlet: "canvasOutlet",
      component: InvoiceComponent
    },
    {
      path: 'create-invoice',
      outlet: "canvasOutlet",
      component: CreateInvoiceProductsComponent
    },
    {
      path: 'create-invoice-client-data',
      outlet: "canvasOutlet",
      component: CreateInvoiceDataClitentComponent
    },
    {
      path: 'order-details',
      outlet: "canvasOutlet",
      component: OrderDetailsComponent
    },
    {
      path: 'product-details',
      outlet: "canvasOutlet",
      component: ProductDetailsComponent
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
  imports: [RouterModule.forChild(CanvasRoutes)],
  exports: [RouterModule]
})
export class SharedRoutingModule {}
