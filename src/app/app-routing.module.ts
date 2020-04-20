import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {CustomersComponentComponent} from "./customers-component/customers-component.component";
import {CustomerInformationComponent} from "./customer-information/customer-information.component";
import {LoginFormComponent} from "./login-form/login-form.component";
import {OrdersComponentComponent} from "./orders-component/orders-component.component";
import {AboutComponent} from "./about/about.component";

const routes: Routes = [
  {path: 'customers', component: CustomersComponentComponent},
  {path: 'customerInformation/:id/:option', component: CustomerInformationComponent},
  {path: 'login', component: LoginFormComponent},
  {path: 'orders', component: OrdersComponentComponent},
  {path: 'about', component: AboutComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
