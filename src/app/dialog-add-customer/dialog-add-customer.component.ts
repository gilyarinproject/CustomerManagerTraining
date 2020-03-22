import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {DataDialogAddCustomer} from "../interfaces";
import { FormsModule} from "@angular/forms";
import { COUNTRIES } from '../interfaces';

@Component({
  selector: 'app-dialog-add-customer',
  templateUrl: './dialog-add-customer.component.html',
  styleUrls: ['./dialog-add-customer.component.css']
})
export class DialogAddCustomerComponent implements OnInit {

  form: FormsModule;
  countries: string[];

  constructor(
    public dialogRef: MatDialogRef<DialogAddCustomerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DataDialogAddCustomer,
  ) { }

  ngOnInit(): void {
    this.countries = COUNTRIES;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit(form: any): void {
    this.dialogRef.close(form.value);
  }
}
