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
    alert(newCustomer.firstName + ' ' + newCustomer.lastName + ' added to customers!');
  }

  getCustomer(id: number): Customer | undefined {
    return customers.find(customer => customer.id === id);
  }

  editCustomer(customerToChange: Customer) {
    customers.splice(customerToChange.id - 1, 1, customerToChange);
  }

  deleteCustomer(id: number) {
    customers.splice(id - 1, 1);
  }
}
