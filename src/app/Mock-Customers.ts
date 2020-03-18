import {Address, Customer, Gender, Order} from "./interfaces";

const orders1: Order[] = [
  {itemName: 'Basketball', itemPrice: 7.99},
  {itemName: 'Shoes', itemPrice: 199.99}
];

const orders2: Order[] = [
  {itemName: 'Frisbee', itemPrice: 2.99},
  {itemName: 'Hat', itemPrice: 5.99}
];

const orders3: Order[] = [
  {itemName: 'Boomerang', itemPrice: 29.99},
  {itemName: 'Helmet', itemPrice: 19.99},
  {itemName: 'Kangaroo Saddle', itemPrice: 179.99}
];


const customer1: Customer = {
  firstName: 'Ted',
  lastName: 'James',
  address: {
    city: 'Holon',
    country: 'Israel'
  },
  gender: Gender.Male,
  id: 1,
  orders: orders1
};

const customer2: Customer = {
  firstName: 'Michelle',
  lastName: 'Thompson',
  address: {
    city: 'Encinitas',
    country: 'California'
  },
  gender: Gender.Female,
  id: 2,
  orders: orders2
};

const customer3: Customer = {
  firstName: 'Zed',
  lastName: 'Bishop',
  address: {
    city: 'Napoli',
    country: 'Italy'
  },
  gender: Gender.Male,
  id: 3,
  orders: orders3
};

const customer4: Customer = {
  firstName: 'Tina',
  lastName: 'Adams',
  address: {
    city: 'Athens',
    country: 'Greece'
  },
  gender: Gender.Female,
  id: 4
};

const customer5: Customer = {
  firstName: 'Igor',
  lastName: 'Minar',
  address: {
    city: 'Dallas',
    country: 'Texas'
  },
  gender: Gender.Male,
  id: 5
};

export let customers: Customer[] = [customer1, customer2, customer3, customer4, customer5];
