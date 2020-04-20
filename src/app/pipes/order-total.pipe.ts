import { Pipe, PipeTransform } from "@angular/core";
import { Customer } from "../models/Customer";

@Pipe({
  name: "orderTotal"
})
export class OrderTotalPipe implements PipeTransform {
  transform(value: Customer): string {
    let sum: number = 0;
    if (value.orders) {
      sum = value.orders.reduce((acc, cur) => acc + cur.itemPrice, 0);
    }
    return sum.toFixed(2);
  }
}
