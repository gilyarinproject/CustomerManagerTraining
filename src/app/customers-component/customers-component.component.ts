import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { DialogAddCustomerComponent } from "../dialog-add-customer/dialog-add-customer.component";
import { CustomersServiceService } from "../services/customers-service.service";
import { Customer } from "../models/Customer";
import { CustomersMenuOptions } from "../enums/CustomersMenuOptions";

@Component({
  selector: "app-customers-component",
  templateUrl: "./customers-component.component.html",
  styleUrls: ["./customers-component.component.css"]
})
export class CustomersComponentComponent implements OnInit {
  title: string;
  newCustomer: object;
  customers: Customer[];
  menuOption: CustomersMenuOptions;
  options = CustomersMenuOptions;
  relevantCustomers: Customer[];

  constructor(
    public dialog: MatDialog,
    private customersService: CustomersServiceService
  ) {
    this.title = "Add Customer";
  }

  ngOnInit(): void {
    this.menuOption = CustomersMenuOptions.CardView;
    this.getCustomers();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddCustomerComponent, {
      width: "400px",
      height: "500px",
      data: { title: this.title }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.newCustomer = {
          firstName: result.firstName,
          lastName: result.lastName,
          city: result.city,
          country: result.country,
          gender: result.gender
        };
        this.addCustomer(this.newCustomer);
      }
    });
  }

  getCustomers(): void {
    this.customersService.getCustomers().subscribe(res => {
      this.customers = res;
      this.relevantCustomers = res;
    });
  }

  addCustomer(newCustomer: object): void {
    this.customersService.addCustomer(newCustomer).subscribe(res => {
      alert(res.firstName + " " + res.lastName + " added to customers!");
      this.getCustomers();
    });
  }

  onClickCard(): void {
    this.menuOption = CustomersMenuOptions.CardView;
  }

  onClickList(): void {
    this.menuOption = CustomersMenuOptions.ListView;
  }

  searchCustomer(event: any): void {
    if (event.target.value === "") {
      this.relevantCustomers = this.customers;
    } else {
      this.relevantCustomers = this.customers.filter(
        customer =>
          customer.firstName
            .toUpperCase()
            .includes(event.target.value.toUpperCase()) ||
          customer.lastName
            .toUpperCase()
            .includes(event.target.value.toUpperCase())
      );
    }
  }
}
