import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { SharedRoutingModule } from './common/common-routing.module';
import { SalesRegistrationComponent } from './order/sales-registration/sales-registration.component';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'registration',
  //   pathMatch: 'full'
  // },
  // {
  //   path: '', //'registration',
  //   component: SalesRegistrationComponent,
  //   loadChildren: './common/common-routing.module#SharedRoutingModule'
  //   //loadChildren: () => import('./common/common.module').then(m => m.SharedModule)
  // },
  //{ path: "inner", loadChildren: "./common/common-routing.module#SharedRoutingModule" },
  {
    path: '',
    component: SalesRegistrationComponent,
    loadChildren: './common/common-routing.module#SharedRoutingModule'
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,  { preloadingStrategy: PreloadAllModules, enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
