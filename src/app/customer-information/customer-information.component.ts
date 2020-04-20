import {Component, OnInit} from '@angular/core';
import {CustomersServiceService} from "../services/customers-service.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Customer} from "../models/Customer";
import {CustomerInformationMenuOptions} from "../enums/CustomerInformationMenuOptions";

@Component({
  selector: 'app-customer-information',
  templateUrl: './customer-information.component.html',
  styleUrls: ['./customer-information.component.css']
})
export class CustomerInformationComponent implements OnInit {

  customer: Customer;
  title: string;
  menuOption: CustomerInformationMenuOptions;
  options = CustomerInformationMenuOptions;

  constructor(
    private customersService: CustomersServiceService,
    private  route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.title = 'Customer Information';
    this.getCustomer();
    this.getOption()
  }

  getCustomer(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.customersService.getCustomer(id)
      .subscribe((res) => {
      this.customer = res;
    });
  }

  getOption(): void {
    const option = this.route.snapshot.paramMap.get('option');
    switch (option) {
      case 'edit': {
        this.menuOption = CustomerInformationMenuOptions.Edit;
        break;
      }
      case 'details': {
        this.menuOption = CustomerInformationMenuOptions.Details;
        break;
      }
      case 'orders': {
        this.menuOption = CustomerInformationMenuOptions.Orders;
        break;
      }
    }
  }

  onClickDetails(): void {
    this.menuOption = CustomerInformationMenuOptions.Details;
    this.router.navigate(['/customerInformation/' + this.customer.id + '/details']);

  }

  onClickOrders(): void {
    this.menuOption = CustomerInformationMenuOptions.Orders;
    this.router.navigate(['/customerInformation/' + this.customer.id + '/orders']);

  }

  onClickEdit(): void {
    this.menuOption = CustomerInformationMenuOptions.Edit;
    this.router.navigate(['/customerInformation/' + this.customer.id + '/edit']);
  }

}
