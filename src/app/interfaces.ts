export enum Gender {
  Male = 'Male',
  Female = 'Female'
}

export interface Address {
  city: string,
  country: string
}

export interface Customer {
  firstName: string,
  lastName: string,
  address: Address,
  gender: Gender,
  id?: number,
  orders?: Order[]
}

export interface DataDialogAddCustomer {
  customer: Customer,
  title: string
}

export enum CustomerInformationMenuOptions {
  Details = 'Customer Details',
  Orders = 'Customer Orders',
  Edit = 'Edit Customer'
}

export enum CustomersMenuOptions {
  CardView = 'Card View',
  ListView = 'List View'
}

export enum LoginLogout {
  Login = 'Login',
  Logout = 'Logout'
}

export const COUNTRIES: string[] = ['Israel', 'California', 'Italy', 'Greece', 'Texas'];

export interface Order {
  itemName: string,
  itemPrice: number
}

