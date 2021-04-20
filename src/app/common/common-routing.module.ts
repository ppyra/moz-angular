import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { InvoiceComponent } from "../order/documents/create_invoice/invoice/invoice.component";
import { DocumentsComponent } from "../order/documents/documents.component";

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
  imports: [RouterModule.forChild(CanvasRoutes)],
  exports: [RouterModule]
})
export class SharedRoutingModule {}
