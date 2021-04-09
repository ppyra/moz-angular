import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalesRegistrationComponent } from './order/sales-registration/sales-registration.component';

const routes: Routes = [
  { 
    path: '', 
    redirectTo: '/sales-registration', 
    pathMatch: 'full'
  },
  {
    path: 'sales-registration',
    component: SalesRegistrationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
