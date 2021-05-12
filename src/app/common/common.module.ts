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
import { SearchOrderComponent } from "./components/search-order/search-order.component";
import { InputTextComponent } from "./components/input-text/input-text.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DateTimePickerComponent } from "./components/date-time-picker/date-time-picker.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  imports: [
    NotifierModule,
    CommonModule,
    RouterModule,
    SharedRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    TranslateModule.forChild()
  ],
  declarations: [
    ModalComponent,
    OffcanvasBootomComponent,
    NumberSpinnerComponent,
    RowDataLabelComponent,
    CellDataLabelComponent,
    SearchOrderComponent,
    InputTextComponent,
    DateTimePickerComponent,
    BreadcrumbComponent],
  exports: [
    TranslateModule,
    NotifierModule,
    ModalComponent,
    OffcanvasBootomComponent,
    NumberSpinnerComponent,
    CellDataLabelComponent,
    RowDataLabelComponent,
    BreadcrumbComponent,
    SearchOrderComponent,
    InputTextComponent,
    DateTimePickerComponent
  ]

})
export class SharedModule {
}

