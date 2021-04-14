import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";
import { DocumentsModule } from "../order/documents/documents.module";
import { ModalComponent } from "./components/modal/modal.component";
//import { ModalModule } from "./components/modal/modal.module";
import { NotifierModule } from "./components/notifier/notifier.module";
import { OffcanvasBootomComponent } from './components/offcanvas-bootom/offcanvas-bootom.component';

@NgModule({
  imports: [
    NotifierModule,
    CommonModule,
    DocumentsModule,
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

