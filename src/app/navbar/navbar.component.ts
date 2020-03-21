import {Component, OnInit } from '@angular/core';
import {LoginLogout} from "../interfaces";
import {LoginLogoutService} from "../login-logout.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  peopleImage: string;
  loginLogout: LoginLogout;

  constructor(private loginLogoutService: LoginLogoutService) {}

  ngOnInit(): void {
    this.peopleImage = './assets/images/people.png';
    this.loginLogoutService.loginLogout.subscribe(value => {
      this.loginLogout = value
    });
  }


  loginLogoutClicked() {
    this.loginLogoutService.changeState('just click');
  }
}
