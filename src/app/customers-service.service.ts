import { Injectable } from '@angular/core';
import { customers } from './Mock-Customers';
import { Customer } from "./interfaces";

@Injectable({
  providedIn: 'root'
})
export class CustomersServiceService {

  constructor() { }

  getCustomers(): Customer[] {
    return customers;
  }

  addCustomer(newCustomer: Customer) {
    newCustomer.id = customers.length + 1;
    customers.push(newCustomer);
    console.log(customers);
  }

  getCustomer(id: number): Customer | null {
    for (let customer of customers) {
      if (customer.id == id) {
        return customer;
      }
    }
    return null;
  }

  editCustomer(customerChanged: Customer) {
    console.log(customerChanged.lastName);
    for (let customer of customers) {
      if (customer.id == customerChanged.id) {
        customer = customerChanged
      }
    }
    console.log('in sevice in edit function' + customers[0].lastName);
  }
}
