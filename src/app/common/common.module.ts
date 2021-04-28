import { ProductModule } from './../order/product/product.module';
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";
import { DocumentsModule } from "../order/documents/documents.module";
import { SharedRoutingModule } from "./common-routing.module";
import { ModalComponent } from "./components/modal/modal.component";
import { NotifierModule } from "./components/notifier/notifier.module";
import { OffcanvasBootomComponent } from './components/offcanvas-bootom/offcanvas-bootom.component';
import { NumberSpinnerComponent } from './components/number-spinner/number-spinner.component';
import { DataTableComponent } from './components/data-table/data-table.component';
import { CellDataLabelComponent } from './components/cell-data-label/cell-data-label.component';

@NgModule({
  imports: [
    NotifierModule,
    CommonModule,
   // DocumentsModule,
   //ProductModule,
    RouterModule,
    SharedRoutingModule,
    TranslateModule.forChild()
  ],
  declarations: [
    ModalComponent,
    OffcanvasBootomComponent,
    NumberSpinnerComponent,
    DataTableComponent,
    CellDataLabelComponent],
  exports: [
    TranslateModule,
    NotifierModule,
    ModalComponent,
    OffcanvasBootomComponent,
    NumberSpinnerComponent,
    DataTableComponent,
    CellDataLabelComponent
  ]

})
export class SharedModule {
}

