import {Pipe, PipeTransform} from '@angular/core';
import {Gender} from "../enums/Gender";

@Pipe({
  name: 'genderPhoto'
})
export class GenderPhotoPipe implements PipeTransform {

  transform(gender: Gender): string {
    if (gender === Gender.Male) {
      return './assets/images/male.png';
    }
    else {
      return './assets/images/female.png';
    }
  }

}
