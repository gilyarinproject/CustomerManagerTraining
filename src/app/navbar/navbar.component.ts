import {Component, OnInit, OnDestroy} from '@angular/core';
import {Subject, Subscription} from "rxjs";
import {LoginLogout} from "../interfaces";
import {LoginFormComponent} from "../login-form/login-form.component";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  peopleImage: string;
  loginLogout: LoginLogout;
  subject: Subject<string>;
  subscription: Subscription;

  constructor(private loginComponent: LoginFormComponent) {
    // this.subject = new Subject<LoginLogout>();
    // this.subject.subscribe( {
    //   next: (val) => { this.loginLogout = val;
    //     console.log(val);}
    // });
    // this.subject.next(LoginLogout.Login);
    // console.log(this.loginLogout);

    this.subscription = this.loginComponent.getSubject().subscribe(change => {
      console.log(change);
      if (change) {
        this.changeLoginLogout();
      }
    })
  }

  ngOnInit(): void {
    this.peopleImage = './assets/images/people.png';
    this.loginLogout = LoginLogout.Login;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  changeLoginLogout() {
    if(this.loginLogout === LoginLogout.Logout) {
      this.loginLogout = LoginLogout.Login
    }
    else {
      this.loginLogout = LoginLogout.Logout
    }
  }
}
