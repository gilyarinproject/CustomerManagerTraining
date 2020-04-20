import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CustomersServiceService} from "../services/customers-service.service";
import {Router} from "@angular/router";
import {Customer} from "../models/Customer";
import {COUNTRIES} from "../enums/valid-countries";

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {

  @Input() customer: Customer;
  @Output() menuOptionChange = new EventEmitter();

  countries: string[];


  constructor(private customersService: CustomersServiceService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.countries = COUNTRIES;
  }


  onSubmit(details: any): void {
    let changedCustomerToUpdate = this.createCustomerWithChanges(details);
    this.customersService.updateCustomer(this.customer.id, changedCustomerToUpdate)
      .subscribe((res) => {
        alert(res.firstName + ' ' + res.lastName + ' details updated')
      })
      ;
    this.router.navigate(['/customers']);
  }

  createCustomerWithChanges(details: any): object {
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

    countryNew = this.customer.address.country;

    let newCustomer = {
      firstName: firstNameNew,
      lastName: lastNameNew,
      city: cityNew,
      country: countryNew
    };

    return newCustomer;
  }

  onDelete(): void {
    this.customersService.deleteCustomer(this.customer.id)
      .subscribe(({data}) => {
      if (data.deleteCustomer === 'deleted') {
        alert(this.customer.firstName + ' ' + this.customer.lastName + ' deleted');
        this.router.navigate(['/customers']);
      }
      else {
        alert('deletion failed');
      }
    });

  }

  onCancel(): void {
    this.menuOptionChange.emit();
    this.router.navigate(['/customerInformation/' + this.customer.id + '/details']);
  }
}
