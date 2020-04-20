import {Address} from "./Address";
import {Gender} from "../enums/Gender";
import {Order} from "./Order";

export interface Customer {
  firstName: string,
  lastName: string,
  address: Address,
  gender: Gender,
  id?: number,
  orders?: Order[]
}
