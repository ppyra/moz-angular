import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";
import { SharedRoutingModule } from "./common-routing.module";
import { ModalComponent } from "./components/modal/modal.component";
import { NotifierModule } from "./components/notifier/notifier.module";
import { OffcanvasBootomComponent } from './components/offcanvas-bootom/offcanvas-bootom.component';
import { NumberSpinnerComponent } from './components/number-spinner/number-spinner.component';
import { CellDataLabelComponent } from './components/cell-data-label/cell-data-label.component';
import { RowDataLabelComponent } from './components/row-data-label/row-data-label.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';

@NgModule({
  imports: [
    NotifierModule,
    CommonModule,
    RouterModule,
    SharedRoutingModule,
    TranslateModule.forChild()
  ],
  declarations: [
    ModalComponent,
    OffcanvasBootomComponent,
    NumberSpinnerComponent,
    RowDataLabelComponent,
    CellDataLabelComponent,
    BreadcrumbComponent],
  exports: [
    TranslateModule,
    NotifierModule,
    ModalComponent,
    OffcanvasBootomComponent,
    NumberSpinnerComponent,
    CellDataLabelComponent,
    RowDataLabelComponent,
    BreadcrumbComponent
  ]

})
export class SharedModule {
}

