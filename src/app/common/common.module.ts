import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";
import { DocumentsModule } from "../order/documents/documents.module";
import { SharedRoutingModule } from "./common-routing.module";
import { ModalComponent } from "./components/modal/modal.component";
import { NotifierModule } from "./components/notifier/notifier.module";
import { OffcanvasBootomComponent } from './components/offcanvas-bootom/offcanvas-bootom.component';

@NgModule({
  imports: [
    NotifierModule,
    CommonModule,
    DocumentsModule,
    RouterModule,
    SharedRoutingModule,
    TranslateModule.forChild()
  ],
  declarations: [
    ModalComponent,
    OffcanvasBootomComponent],
  exports: [
    TranslateModule,
    NotifierModule,
    ModalComponent,
    //RouterModule,
    OffcanvasBootomComponent
  ]

})
export class SharedModule {
}

