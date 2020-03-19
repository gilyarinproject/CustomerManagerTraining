import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  details: any[];

  constructor() { }

  ngOnInit(): void {
    this.setDetails();
  }

  setDetails() {
    this.details = [
      {fieldName: 'Created For', value: 'Galileo Project'},
      {fieldName: 'The project based on', value: 'Dan Wahlin exercise'},
      {fieldName: 'GitHub', value: "<a href='https://github.com/DanWahlin/Angular-JumpStart'>" +
          "https://github.com/DanWahlin/Angular-JumpStart</a>"},
      {fieldName: 'Questions & Feedback', value: 'gilzilberman123@gmail.com'}]
  }
}
