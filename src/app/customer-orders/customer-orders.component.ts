import {Component, Input, OnInit} from '@angular/core';
import {Customer} from "../models/Customer";

@Component({
  selector: 'app-customer-orders',
  templateUrl: './customer-orders.component.html',
  styleUrls: ['./customer-orders.component.css']
})
export class CustomerOrdersComponent implements OnInit {

  @Input() customer: Customer;

  constructor() { }

  ngOnInit(): void {
  }

}
