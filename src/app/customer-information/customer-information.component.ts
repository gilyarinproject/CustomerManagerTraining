import {Component, OnInit} from '@angular/core';
import {Customer, CustomerInformationMenuOptions} from "../interfaces";
import {CustomersServiceService} from "../customers-service.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-customer-information',
  templateUrl: './customer-information.component.html',
  styleUrls: ['./customer-information.component.css']
})
export class CustomerInformationComponent implements OnInit {

  // @Input() customer: Customer;

  customer: Customer;
  title: string;
  menuOption: CustomerInformationMenuOptions;

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
    this.customer = this.customersService.getCustomer(id);
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

  onClickDetails() {
    this.menuOption = CustomerInformationMenuOptions.Details;
    this.router.navigate(['/customerInformation/' + this.customer.id + '/details']);

  }

  onClickOrders() {
    this.menuOption = CustomerInformationMenuOptions.Orders;
    this.router.navigate(['/customerInformation/' + this.customer.id + '/orders']);

  }

  onClickEdit() {
    this.menuOption = CustomerInformationMenuOptions.Edit;
    this.router.navigate(['/customerInformation/' + this.customer.id + '/edit']);

  }

}
