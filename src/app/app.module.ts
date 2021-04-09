import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SalesRegistrationComponent } from './order/sales-registration/sales-registration.component';
import { ProductItemComponent } from './order/product/product-item/product-item.component';
import { ProductDetailsComponent } from './order/product/product-details/product-details.component';
import { OrderItemComponent } from './order/order-item/order-item.component';
import { DocumentsComponent } from './order/documents/documents.component';
import { InvoiceComponent } from './order/documents/invoices/invoice/invoice.component';

@NgModule({
  declarations: [
    AppComponent,
    SalesRegistrationComponent,
    ProductItemComponent,
    ProductDetailsComponent,
    OrderItemComponent,
    DocumentsComponent,
    InvoiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
