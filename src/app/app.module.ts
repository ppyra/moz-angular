import { CommonModule } from '@angular/common';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SalesRegistrationComponent } from './order/sales-registration/sales-registration.component';
import { OrderItemComponent } from './order/order-item/order-item.component';
import { DocumentsComponent } from './order/documents/documents.component';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorHandlerInterceptor } from './core/http/error.interceptor';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { SharedModule } from './common/common.module';

import { ProductModule } from './order/product/product.module';
import { DocumentsModule } from './order/documents/documents.module';


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
    OrderItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    DocumentsModule,
    ProductModule,
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
  exports: [ TranslateModule, AppRoutingModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
