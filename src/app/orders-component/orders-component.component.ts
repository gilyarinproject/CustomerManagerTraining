import { Component, OnInit } from '@angular/core';
import {CustomersServiceService} from "../customers-service.service";
import {Customer} from "../interfaces";

@Component({
  selector: 'app-orders-component',
  templateUrl: './orders-component.component.html',
  styleUrls: ['./orders-component.component.css']
})
export class OrdersComponentComponent implements OnInit {

  customers: Customer[];
  customersWithOrders: Customer[] = [];

  constructor(private customersService: CustomersServiceService) { }

  ngOnInit(): void {
    this.customers = this.customersService.getCustomers();
    this.getCustomersWithOrders();
  }

  getCustomersWithOrders() {
    this.customersWithOrders = this.customers.filter(customer => customer.orders);
  }

}
