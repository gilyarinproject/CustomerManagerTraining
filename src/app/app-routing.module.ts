import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {CustomersComponentComponent} from "./customers-component/customers-component.component";
import {CustomerInformationComponent} from "./customer-information/customer-information.component";
import {LoginFormComponent} from "./login-form/login-form.component";
import {CustomerOrdersComponent} from "./customer-orders/customer-orders.component";

const routes: Routes = [
  {path: 'customers', component: CustomersComponentComponent},
  {path: 'customerInformation/:id/:option', component: CustomerInformationComponent},
  {path: 'login', component: LoginFormComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
