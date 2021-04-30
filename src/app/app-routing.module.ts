import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { SalesRegistrationComponent } from './order/sales-registration/sales-registration.component';

const routes: Routes = [
  {
    path: '',
    component: SalesRegistrationComponent,
    loadChildren: './common/common-routing.module#SharedRoutingModule',
    data: {
      breadcrumb: 'moz',
    }
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes,  { preloadingStrategy: PreloadAllModules, enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
