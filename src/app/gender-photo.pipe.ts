import {Pipe, PipeTransform} from '@angular/core';
import {Customer, Gender} from "./interfaces";

@Pipe({
  name: 'genderPhoto'
})
export class GenderPhotoPipe implements PipeTransform {

  transform(value: Customer): string {
    if (value.gender === Gender.Male) {
      return './assets/images/male.png';
    }
    else {
      return './assets/images/female.png';
    }
  }

}
