import { Component, OnInit } from '@angular/core';
import {CustomersServiceService} from "../services/customers-service.service";
import {Customer} from "../models/Customer";

@Component({
  selector: 'app-orders-component',
  templateUrl: './orders-component.component.html',
  styleUrls: ['./orders-component.component.css']
})
export class OrdersComponentComponent implements OnInit {

  customersWithOrders: Customer[];

  constructor(private customersService: CustomersServiceService) { }

  ngOnInit(): void {
    this.getCustomersWithOrders();
  }

  getCustomersWithOrders(): void {
    this.customersService.getCustomers().subscribe((res) => {
      this.customersWithOrders = res.filter(customer => customer.orders);
    });
  }
}
