import {Component, Injectable, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {LoginLogoutService} from "../services/login-logout.service";

@Injectable({ providedIn: 'root' })
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  email: string;
  password: string;

  constructor(private router: Router,
              private loginLogoutService: LoginLogoutService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.email.length >=6 && this.password.length >=6) {
      this.router.navigate(['/customers']);
      this.loginLogoutService.changeState('submit');
    }
    else {
      alert('email and password must contain at least 6 characters!');
    }
  }
}
