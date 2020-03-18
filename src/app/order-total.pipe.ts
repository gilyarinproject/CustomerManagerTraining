import { Pipe, PipeTransform } from '@angular/core';
import {Customer} from "./interfaces";

@Pipe({
  name: 'orderTotal'
})
export class OrderTotalPipe implements PipeTransform {

  transform(value: Customer): number {
    let sum = 0;
    if (value.orders) {
      for (let order of value.orders) {
        sum += order.itemPrice;
      }
    }
    return Math.round(sum * 100) / 100;  }
}
