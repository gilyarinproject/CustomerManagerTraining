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
import { ReactiveFormsModule } from "@angular/forms";
import { FormsModule } from "@angular/forms";
import { CustomerInformationComponent } from './customer-information/customer-information.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { CustomerCardComponent } from './customer-card/customer-card.component';
import { GenderPhotoPipe } from './pipes/gender-photo.pipe';
import { MatTableModule } from "@angular/material/table";
import { ListViewComponent } from './list-view/list-view.component';
import { MatSelectModule } from "@angular/material/select";
import { CustomersServiceService } from "./services/customers-service.service";
import { CustomerOrdersComponent } from './customer-orders/customer-orders.component';
import { MatListModule } from "@angular/material/list";
import { MatDividerModule } from "@angular/material/divider";
import { FullNamePipe } from './pipes/full-name.pipe';
import { OrderTotalPipe } from './pipes/order-total.pipe';
import { AddressPipe } from './pipes/address.pipe';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { OrdersComponentComponent } from './orders-component/orders-component.component';
import { AboutComponent } from './about/about.component';
import { PricePipe } from './pipes/price.pipe';

import { HttpClientModule } from "@angular/common/http";
import { ApolloModule, Apollo } from "apollo-angular";
import { HttpLinkModule, HttpLink } from "apollo-angular-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


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
    CustomerDetailsComponent,
    OrdersComponentComponent,
    AboutComponent,
    PricePipe
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
        MatDividerModule,
        HttpClientModule,
        ApolloModule,
        HttpLinkModule,
        MatProgressSpinnerModule,
        BrowserAnimationsModule
    ],
  providers: [CustomersServiceService],
  bootstrap: [AppComponent],
  entryComponents: [DialogAddCustomerComponent]
})
export class AppModule {
  constructor(
    apollo: Apollo,
    httpLink: HttpLink
  ) {
    apollo.create({
      link: httpLink.create({uri: 'http://localhost:4000/graphql'}),
      cache: new InMemoryCache()
    })
  }
}
