import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SalesRegistrationComponent } from './order/sales-registration/sales-registration.component';
import { ProductItemComponent } from './order/product/product-item/product-item.component';
import { ProductDetailsComponent } from './order/product/product-details/product-details.component';
import { OrderItemComponent } from './order/order-item/order-item.component';
import { DocumentsComponent } from './order/documents/documents.component';
import { InvoiceComponent } from './order/documents/create_invoice/invoice/invoice.component';
import { ModalComponent } from './common/modal/modal.component';
import { CreateInvoiceProductsComponent } from './order/documents/create_invoice/create-invoice-products/create-invoice-products.component';
import { CreateInvoiceDataClitentComponent } from './order/documents/create_invoice/create-invoice-data-clitent/create-invoice-data-clitent.component';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorHandlerInterceptor } from './core/http/error.interceptor';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { DEBUG_MISSING_TRANSLATION } from './core/i18n/missing-translation-handler';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}


@NgModule({
  declarations: [
    AppComponent,
    SalesRegistrationComponent,
    ProductItemComponent,
    ProductDetailsComponent,
    OrderItemComponent,
    DocumentsComponent,
    InvoiceComponent,
    ModalComponent,
    CreateInvoiceProductsComponent,
    CreateInvoiceDataClitentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot(
      {
      loader: {
          provide: TranslateLoader,
          useFactory: (createTranslateLoader),
          deps: [HttpClient]
      }
  })
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: ErrorHandlerInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
