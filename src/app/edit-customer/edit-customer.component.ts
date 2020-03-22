import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Customer} from "../interfaces";
import {CustomersServiceService} from "../customers-service.service";
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

  constructor(private customersService: CustomersServiceService,
              private router: Router) { }

  ngOnInit(): void {
    this.countries = COUNTRIES;
    this.selected = this.customer.address.country;
  }

  onSubmit(details: any) {
    let changedCustomerToUpdate = this.createCustomerWithChanges(details);
    this.customersService.editCustomer(changedCustomerToUpdate);
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
