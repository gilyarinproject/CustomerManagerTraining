import { Pipe, PipeTransform } from '@angular/core';
import {Customer} from "./interfaces";

@Pipe({
  name: 'fullName'
})
export class FullNamePipe implements PipeTransform {

  transform(value: Customer): string {
    return value.firstName + ' ' + value.lastName;
  }

}
