import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";
import { InvoiceComponent } from "../order/documents/create_invoice/invoice/invoice.component";
import { DocumentsComponent } from "../order/documents/documents.component";
import { DocumentsModule } from "../order/documents/documents.module";
import { ModalComponent } from "./components/modal/modal.component";
//import { ModalModule } from "./components/modal/modal.module";
import { NotifierModule } from "./components/notifier/notifier.module";
import { OffcanvasBootomComponent } from './components/offcanvas-bootom/offcanvas-bootom.component';

const commonRoutes: Routes = [
      {
        path: 'documents', 
        component: DocumentsComponent
      },
      {
        path: 'invoice', 
        component: InvoiceComponent
      }
];
export const CommonRoutesModule = RouterModule.forChild(commonRoutes);

@NgModule({
  imports: [
    NotifierModule,
    CommonModule,
    DocumentsModule,
    CommonRoutesModule,
    TranslateModule.forChild(),
  ],
  declarations: [
    ModalComponent,
    OffcanvasBootomComponent],
  exports: [
    TranslateModule,
    NotifierModule,
    ModalComponent,
    OffcanvasBootomComponent
  ]

})
export class SharedModule {
}

