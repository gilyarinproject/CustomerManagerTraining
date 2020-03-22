import { Pipe, PipeTransform } from '@angular/core';
import {Customer} from "./interfaces";

@Pipe({
  name: 'orderTotal'
})
export class OrderTotalPipe implements PipeTransform {

  transform(value: Customer): number {
    let sum: number;
    if (value.orders) {
      sum = value.orders.reduce(
        ( acc, cur ) => acc + cur.itemPrice, 0)
    }
    return Math.round(sum * 100) / 100;
  }
}
