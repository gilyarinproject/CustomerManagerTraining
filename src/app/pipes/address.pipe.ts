import { Pipe, PipeTransform } from '@angular/core';
import {Address} from "../models/Address";

@Pipe({
  name: 'address'
})
export class AddressPipe implements PipeTransform {

  transform(value: Address): string {
    return value.city + ', ' + value.country;
  }

}
