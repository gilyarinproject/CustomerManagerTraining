import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoginLogoutService {
  private loginSubject = new BehaviorSubject(false);
  loginLogout = this.loginSubject;

  constructor() {}

  changeState(cameFrom: string) {
    if (this.loginSubject.value === false &&
        cameFrom !== 'just click') {
      this.loginSubject.next(true);
    }
    else {
      this.loginSubject.next(false);
    }
  }
}
