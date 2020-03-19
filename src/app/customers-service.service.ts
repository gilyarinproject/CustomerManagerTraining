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

  editCustomer(customerToChange: Customer) {
    customers.splice(customerToChange.id - 1, 1, customerToChange);
    for (let customer of customers) {
      console.log(customer.lastName);
    }
  }
}
