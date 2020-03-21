import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Customer} from "../interfaces";
import {CustomersServiceService} from "../customers-service.service";
import {count} from "rxjs/operators";
import {conditionallyCreateMapObjectLiteral} from "@angular/compiler/src/render3/view/util";
import { COUNTRIES } from '../interfaces';
import {Router} from "@angular/router";

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {

  @Input() customer: Customer;
  @Output() menuOptionChange = new EventEmitter();

  countries: string[];
  selected: string;

  firstNameNew: string;
  lastNameNew: string;
  cityNew: string;
  countryNew: string;

  constructor(private customersService: CustomersServiceService,
              private router: Router) { }

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

    console.log(details);
    console.log(this.selected);

    let clonedCustomer = this.createCustomerWithChanges(details);
    console.log(clonedCustomer.firstName + ' in edit customer component');
    console.log(clonedCustomer.lastName + ' in edit customer component');
    console.log(clonedCustomer.address.city + ' in edit customer component');
    console.log(clonedCustomer.address.country + ' in edit customer component');
    this.customersService.editCustomer(clonedCustomer);
    alert(this.customer.firstName + ' ' + this.customer.lastName + ' details updated');
    this.router.navigate(['/customers']);
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

    if (this.selected !== this.customer.address.country) {
      countryNew = this.selected;
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
    this.customersService.deleteCustomer(this.customer.id);
    alert(this.customer.firstName + ' ' + this.customer.lastName + ' deleted');
    this.router.navigate(['/customers']);
  }

  onCancel() {
    this.menuOptionChange.emit();
    this.router.navigate(['/customerInformation/' + this.customer.id + '/details']);
  }
}
