import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {DialogAddCustomerComponent} from "../dialog-add-customer/dialog-add-customer.component";
import {Customer, CustomersMenuOptions} from '../interfaces';
import {CustomersServiceService} from "../customers-service.service";

@Component({
  selector: 'app-customers-component',
  templateUrl: './customers-component.component.html',
  styleUrls: ['./customers-component.component.css']
})
export class CustomersComponentComponent implements OnInit{

  title: string;
  newCustomer: Customer;
  customers: Customer[];
  menuOption: CustomersMenuOptions;
  relevantCustomers: Customer[];

  constructor(public dialog: MatDialog, private customersService: CustomersServiceService) {
    this.title = 'Add Customer';
  }

  ngOnInit() {
    this.menuOption = CustomersMenuOptions.CardView;
    this.getCustomers();
    this.relevantCustomers = this.customers;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddCustomerComponent, {
      width: '20%',
      height: '45%',
      data: {title: this.title}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        console.log('dialog was closed');
        console.log(result);
        this.newCustomer = {
          firstName: result.firstName,
          lastName: result.lastName,
          address: {
            city: result.city,
            country: result.country
          },
          gender: result.gender
        };
        this.addCustomer(this.newCustomer);
      }
    });
  }

  //maybe use observable later as in tour of heroes
  getCustomers(): void {
    this.customers = this.customersService.getCustomers();
  }

  addCustomer(newCustomer: Customer): void {
    this.customersService.addCustomer(newCustomer);
  }

  onClickCard() {
    this.menuOption = CustomersMenuOptions.CardView;
  }
  onClickList() {
    this.menuOption = CustomersMenuOptions.ListView;
  }

  onClickNewCustomer() {

  }

  searchCustomer(event: any) {
    if (event.target.value === ''){
      this.relevantCustomers = this.customers;
    }
    else {
      this.relevantCustomers = [];
      for (let customer of this.customers) {
        if (customer.firstName.toUpperCase().includes(event.target.value.toUpperCase()) ||
          customer.lastName.toUpperCase().includes(event.target.value.toUpperCase())) {
          this.relevantCustomers.push(customer);
        }
      }
    }
  }

}
