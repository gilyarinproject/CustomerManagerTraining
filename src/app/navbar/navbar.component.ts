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
  subscription;

  constructor(private loginComponent: LoginFormComponent) {
    // this.subject = new Subject<LoginLogout>();
    // this.subject.subscribe( {
    //   next: (val) => { this.loginLogout = val;
    //     console.log(val);}
    // });
    // this.subject.next(LoginLogout.Login);
    // console.log(this.loginLogout);


    this.subscription = this.loginComponent.getSubject().subscribe(loginLogoutDecision => {
      console.log(loginLogoutDecision);
      console.log(this.loginLogout);
      if (loginLogoutDecision !== this.loginLogout && this.loginLogout !== undefined) {
        this.changeLoginLogout();
      }
    });
  }

  ngOnInit(): void {
    this.peopleImage = './assets/images/people.png';
    this.loginLogout = LoginLogout.Login;
    console.log(this.loginLogout);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  changeLoginLogout() {
    console.log('in changeLoginLogout()');
    if(this.loginLogout === LoginLogout.Logout) {
      this.loginLogout = LoginLogout.Login
    }
    else {
      this.loginLogout = LoginLogout.Logout
    }
  }
}
