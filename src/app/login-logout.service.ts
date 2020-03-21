import {Injectable} from '@angular/core';
import {LoginLogout} from "./interfaces";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoginLogoutService {
  private loginSubject = new BehaviorSubject(LoginLogout.Login);
  loginLogout = this.loginSubject.asObservable();

  constructor() {}

  changeState(cameFrom: string) {
    if (this.loginSubject.value === LoginLogout.Login &&
        cameFrom !== 'just click') {
      this.loginSubject.next(LoginLogout.Logout);
      console.log('in loginService changeState()');
    }
    else {
      this.loginSubject.next(LoginLogout.Login);
      console.log('in loginService changeState()');
    }
  }
}
