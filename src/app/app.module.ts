import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SalesRegistrationComponent } from './order/sales-registration/sales-registration.component';
import { ProductItemComponent } from './order/product/product-item/product-item.component';
import { ProductDetailsComponent } from './order/product/product-details/product-details.component';
import { OrderItemComponent } from './order/order-item/order-item.component';
import { DocumentsComponent } from './order/documents/documents.component';
import { InvoiceComponent } from './order/documents/create_invoice/invoice/invoice.component';
import { ModalComponent } from './common/components/modal/modal.component';
import { CreateInvoiceProductsComponent } from './order/documents/create_invoice/create-invoice-products/create-invoice-products.component';
import { CreateInvoiceDataClitentComponent } from './order/documents/create_invoice/create-invoice-data-clitent/create-invoice-data-clitent.component';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorHandlerInterceptor } from './core/http/error.interceptor';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NotifierComponent } from './common/components/notifier/notifier.component';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
export function appInitializerFactory(translate: TranslateService) {
  return () => {
    translate.setDefaultLang('pl');
    return translate.use('pl').toPromise();
  };
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
    CreateInvoiceDataClitentComponent,
    NotifierComponent
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
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorHandlerInterceptor, multi: true },
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializerFactory,
      deps: [TranslateService],
      multi: true
    }
  ],
  exports: [NotifierComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
