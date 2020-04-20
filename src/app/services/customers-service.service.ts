import { Injectable } from "@angular/core";
import { Apollo } from "apollo-angular";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Customer } from "../models/Customer";

import { customersQuery } from "../Queries-and-Mutations/customersQuery";
import { addCustomerMutation } from "../Queries-and-Mutations/addCustomerMutation";
import { customerQuery } from "../Queries-and-Mutations/customerQuery";
import { deleteMutation } from "../Queries-and-Mutations/deleteMutation";
import { updateMutation } from "../Queries-and-Mutations/updateMutation";

@Injectable({
  providedIn: "root"
})
export class CustomersServiceService {
  constructor(private apollo: Apollo) {}

  getCustomers(): Observable<Customer[]> {
    return this.apollo
      .watchQuery<any>({
        query: customersQuery,
        fetchPolicy: "network-only"
      })
      .valueChanges.pipe(map(result => result.data.customers));
  }

  addCustomer(newCustomer: object): Observable<Customer> {
    return this.apollo
      .mutate({
        mutation: addCustomerMutation,
        variables: { details: newCustomer }
      })
      .pipe(map(result => result.data.createCustomer));
  }

  getCustomer(id: number): Observable<Customer> {
    return this.apollo
      .watchQuery<any>({
        query: customerQuery,
        variables: { id: id }
      })
      .valueChanges.pipe(map(result => result.data.customer));
  }

  deleteCustomer(id: number): Observable<any> {
    return this.apollo.mutate({
      mutation: deleteMutation,
      variables: { id: id }
    });
  }

  updateCustomer(id: number, newCustomerDetails: object): Observable<Customer> {
    return this.apollo
      .mutate({
        mutation: updateMutation,
        variables: {
          id: id,
          customerDetails: newCustomerDetails
        }
      })
      .pipe(map(result => result.data.updateCustomer));
  }
}
