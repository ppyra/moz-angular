import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { SalesRegistrationComponent } from './order/sales-registration/sales-registration.component';

const routes: Routes = [
  {
    path: 'registration',
    component: SalesRegistrationComponent,
    loadChildren: () => import('./common/common.module').then(m => m.SharedModule)
  },
  {
    path: '',
    redirectTo: 'registration',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,  { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
