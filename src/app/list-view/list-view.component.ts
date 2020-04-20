import {Component, Input, OnInit} from '@angular/core';
import {Customer} from "../models/Customer";

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnInit {

  @Input() customers: Customer[];
  displayedColumns: string[] =
    ['genderImage', 'firstname', 'lastname', 'city', 'country', 'orderTotal', 'viewOrders'];

  constructor() { }

  ngOnInit(): void {
  }

}
