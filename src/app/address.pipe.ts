import { Pipe, PipeTransform } from '@angular/core';
import {Customer} from "./interfaces";

@Pipe({
  name: 'address'
})
export class AddressPipe implements PipeTransform {

  transform(value: Customer): string {
    return value.address.city + ', ' + value.address.country;
  }

}
