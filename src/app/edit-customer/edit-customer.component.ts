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

  firstNameNew: string;
  lastNameNew: string;
  cityNew: string;
  countryNew: string;

  constructor(private customersService: CustomersServiceService) { }

  ngOnInit(): void {
    this.countries = COUNTRIES;
    this.selected = this.customer.address.country;
  }

  onSubmit(details: any) {
    // let clonedCustomer = {...this.customer};
    // console.log(clonedCustomer + ' cloned');
    // if (!details.firstName && details.firstName !== '') {
    //   this.firstNameNew = details.firstName;
    // }
    // if (!details.lastName && details.lastName !== '') {
    //   this.lastNameNew = details.lastName;
    // }
    // if (!details.city && details.city !== '') {
    //   this.cityNew = details.city;
    // }
    // if (!details.country && details.country !== '') {
    //   clonedCustomer.address.country = details.country;
    // }
    let clonedCustomer = this.createCustomerWithChanges(details);
    console.log(clonedCustomer.firstName + ' in edit customer component');
    console.log(clonedCustomer.lastName + ' in edit customer component');
    console.log(clonedCustomer.address.city + ' in edit customer component');
    console.log(clonedCustomer.address.country + ' in edit customer component');
    this.customersService.editCustomer(clonedCustomer);
  }


  createCustomerWithChanges(details: any): Customer {
    let firstNameNew: string;
    let lastNameNew: string;
    let cityNew: string;
    let countryNew: string;

    if (details.firstName !== '') {
      firstNameNew = details.firstName;
    }
    else {
      firstNameNew = this.customer.firstName;
    }

    if (details.lastName !== '') {
      lastNameNew = details.lastName;
    }
    else {
      lastNameNew = this.customer.lastName;
    }

    if (details.city !== '') {
      cityNew = details.city;
    }
    else {
      cityNew = this.customer.address.city;
    }

    if (details.country !== '') {
      countryNew = details.country;
    }
    else {
      countryNew = this.customer.address.country;
    }

    let newCustomer: Customer = {
      firstName: firstNameNew,
      lastName: lastNameNew,
      address: {
        city: cityNew,
        country: countryNew
      },
      gender: this.customer.gender,
      id: this.customer.id,
      orders: this.customer.orders
    };

    return newCustomer;
  }

  onDelete() {

  }

  onCancel() {

  }
}
