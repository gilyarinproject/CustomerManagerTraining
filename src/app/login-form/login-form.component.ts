import {Component, Injectable, OnInit} from '@angular/core';
import {FormGroup, FormsModule, NgForm} from "@angular/forms";
import {Router} from "@angular/router";
import {LoginLogout} from "../interfaces";
import {BehaviorSubject, Observable, Subject} from "rxjs";

@Injectable({ providedIn: 'root' })
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  email: string;
  password: string;
  subject = new BehaviorSubject('Login');

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.email.length >=6 && this.password.length >=6) {
      this.router.navigate(['/customers']);
      this.subject.next('Logout');
      console.log(this.subject);
      console.log('in on submit subject');
    }
    else {
      alert('email or password must conatain at least 6 characters!');
      this.subject.next('');
    }
    console.log('submitted');
  }

  getSubject(): Observable<any> {
    console.log('in getSubject()');
    console.log(this.subject.asObservable());
    return this.subject.asObservable();
  }

}
