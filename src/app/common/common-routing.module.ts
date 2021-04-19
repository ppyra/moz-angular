import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { InvoiceComponent } from "../order/documents/create_invoice/invoice/invoice.component";
import { DocumentsComponent } from "../order/documents/documents.component";
import { OffcanvasBootomComponent } from "./components/offcanvas-bootom/offcanvas-bootom.component";

const CanvasRoutes: Routes = [
  {
    path: 'canvas',
    component: OffcanvasBootomComponent,
    children: [
      {
        //outlet: "chat",
        path: 'documents',
        component: DocumentsComponent
      },
      {
        path: 'invoice',
        component: InvoiceComponent
      }
    ]
  },
  {
    path: '',
    redirectTo: 'canvas/documents',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(CanvasRoutes)],
  exports: [RouterModule]
})
export class SharedRoutingModule {}
