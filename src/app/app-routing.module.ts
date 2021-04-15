import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CommonRoutesModule } from './common/common.module';
import { OffcanvasBootomComponent } from './common/components/offcanvas-bootom/offcanvas-bootom.component';
import { InvoiceComponent } from './order/documents/create_invoice/invoice/invoice.component';
import { DocumentsComponent } from './order/documents/documents.component';
import { SalesRegistrationComponent } from './order/sales-registration/sales-registration.component';

const routes: Routes = [
  { 
    path: '', 
    redirectTo: '/sales-registration/', 
    pathMatch: 'full'
  },
  {
    path: 'sales-registration',
    component: SalesRegistrationComponent, 
    children: [
      { 
        path: 'canvas', 
        component: OffcanvasBootomComponent,
        // children: Module1_ROUTE
         loadChildren: () => import('./common/common.module').then(m => m.SharedModule)
        // children: [
        //   { 
        //     path: 'documents', 
        //     component: DocumentsComponent
        //   },
        //   { 
        //     path: 'invoice', 
        //     component: InvoiceComponent
        //   }
        // ] 
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,  { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
