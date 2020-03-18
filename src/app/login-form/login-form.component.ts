import {Component, Injectable, OnInit} from '@angular/core';
import {FormGroup, FormsModule, NgForm} from "@angular/forms";
import {Router} from "@angular/router";
import {LoginLogout} from "../interfaces";
import {Observable, Subject} from "rxjs";

@Injectable({ providedIn: 'root' })
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  email: string;
  password: string;
  private subject = new Subject<string>();

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.email.length >=6 && this.password.length >=6) {
      this.router.navigate(['/customers']);
      this.subject.next('change');
      console.log('in on submit subject');
    }
    else {
      alert('email or password must conatain at least 6 characters!');
    }
    console.log('submitted');
  }

  getSubject(): Observable<string> {
    console.log('in getSubject()');
    return this.subject.asObservable();
  }

}
