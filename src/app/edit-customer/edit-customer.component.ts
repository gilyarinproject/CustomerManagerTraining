import {Component, Input, OnInit} from '@angular/core';
import {Customer} from "../interfaces";
import {CustomersServiceService} from "../customers-service.service";
import {count} from "rxjs/operators";
import {conditionallyCreateMapObjectLiteral} from "@angular/compiler/src/render3/view/util";
import { COUNTRIES } from '../interfaces';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {

  @Input() customer: Customer;
  countries: string[];
  selected: string;

  constructor(private customersService: CustomersServiceService) { }

  ngOnInit(): void {
    this.countries = COUNTRIES;
    this.selected = this.customer.address.country;
  }

  onSubmit(details: any) {
    console.log(details.lastName);
    let clonedCustomer = {...this.customer};
    console.log(clonedCustomer + ' cloned');
    if (!details.firstName) {
      clonedCustomer.firstName = details.firstName;
    }
    if (!details.lastName) {
      clonedCustomer.lastName = details.lastName;
    }
    if (!details.city) {
      clonedCustomer.address.city = details.city;
    }
    if (!details.country) {
      clonedCustomer.address.country = details.country;
    }
    console.log(clonedCustomer.lastName + ' in edit customer component');
    this.customersService.editCustomer(this.customer);
  }

  cloneCustomer(customer: Customer) {
    let newCustomer: Customer = {
      firstName: customer.firstName,
      lastName: customer.lastName,
      address: {
        city: customer.address.city,
        country: customer.address.country
      },
      gender: customer.gender,
      id: customer.id
    };
    return newCustomer;
  }


  onDelete() {

  }
}
