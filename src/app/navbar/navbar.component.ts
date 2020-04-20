import {Component, OnInit } from '@angular/core';
import {LoginLogoutService} from "../services/login-logout.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isUserLoggedIn: boolean;

  constructor(private loginLogoutService: LoginLogoutService) {}

  ngOnInit(): void {
    this.loginLogoutService.loginLogout.subscribe(value => {
      this.isUserLoggedIn = value;
    });
  }


  loginLogoutClicked() {
    this.loginLogoutService.changeState('just click');
  }
}
