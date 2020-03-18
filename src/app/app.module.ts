import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomersComponentComponent } from './customers-component/customers-component.component';
import { AppRoutingModule } from './app-routing.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { DialogAddCustomerComponent } from './dialog-add-customer/dialog-add-customer.component';
import { MatDialogModule } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatRadioModule } from "@angular/material/radio";
import {ReactiveFormsModule} from "@angular/forms";
import { FormsModule } from "@angular/forms";
import { CustomerInformationComponent } from './customer-information/customer-information.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { CustomerCardComponent } from './customer-card/customer-card.component';
import { GenderPhotoPipe } from './gender-photo.pipe';
import { MatTableModule } from "@angular/material/table";
import { ListViewComponent } from './list-view/list-view.component';
import { MatSelectModule } from "@angular/material/select";
import {CustomersServiceService} from "./customers-service.service";
import { CustomerOrdersComponent } from './customer-orders/customer-orders.component';
import { MatListModule } from "@angular/material/list";
import { MatDividerModule } from "@angular/material/divider";
import { FullNamePipe } from './full-name.pipe';
import { OrderTotalPipe } from './order-total.pipe';
import { AddressPipe } from './address.pipe';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomersComponentComponent,
    DialogAddCustomerComponent,
    CustomerInformationComponent,
    EditCustomerComponent,
    NavbarComponent,
    LoginFormComponent,
    CustomerCardComponent,
    GenderPhotoPipe,
    ListViewComponent,
    CustomerOrdersComponent,
    FullNamePipe,
    OrderTotalPipe,
    AddressPipe,
    CustomerDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    ReactiveFormsModule,
    FormsModule,
    MatTableModule,
    MatSelectModule,
    MatListModule,
    MatDividerModule
  ],
  providers: [CustomersServiceService],
  bootstrap: [AppComponent],
  entryComponents: [DialogAddCustomerComponent]
})
export class AppModule { }
