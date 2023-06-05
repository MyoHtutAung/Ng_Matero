import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-scaf-date',
  template: `

  
    <mat-label class="customLabel">From Date</mat-label>
    <mat-form-field class="demo-full-width m-t-4" appearance="outline">
      <input matInput [matDatepicker]="fromDatePicker" [max]="frommaxDate" [formControl]="fromDate"
             (dateChange)="clickFromDate()" placeholder="Select From Date" readonly>
      <mat-datepicker-toggle matSuffix [for]="fromDatePicker"></mat-datepicker-toggle>
      <mat-datepicker #fromDatePicker></mat-datepicker>
    </mat-form-field>
  

  
    <mat-label class="customLabel">To Date</mat-label>
    <mat-form-field class="demo-full-width m-t-4" appearance="outline">
      <input matInput [matDatepicker]="toDatePicker" [min]="minDate" [max]="maxDate"
             [formControl]="toDate" placeholder="Select To Date" readonly>
      <mat-datepicker-toggle matSuffix [for]="toDatePicker"></mat-datepicker-toggle>
      <mat-datepicker #toDatePicker></mat-datepicker>
    </mat-form-field>
 

  
    <button mat-raised-button color="warn" class="customBtn" (click)="Search()">Search</button>
    <button type="button" class="btn btn-link customClearBtn">Clear All</button>
  

  `
})

export class ScafDateComponent {

  @Input() fromDate = new FormControl()
  @Input() toDate = new FormControl();
  @Input() frommaxDate?: Date
  minDate?: any
  maxDate?: any

  @Output() onChange = new EventEmitter()


  clickFromDate() {
    //this.onChange.emit(this.exam())

  }

  exam() {
    const BeforeDate = moment(this.fromDate.value);
    const AddedDate = BeforeDate.add(90, 'days');
    const CurrentDate = moment(new Date());

    this.toDate.setValue((AddedDate > CurrentDate) ? CurrentDate : AddedDate.toDate());
    this.minDate = moment(this.fromDate.value).toDate();
    this.maxDate = ((BeforeDate.days() + 90 > CurrentDate.days()) ? moment(this.toDate.value) : moment(this.fromDate.value).add(90, 'days').toDate());
  }

  Search() {
    const payload = {
      fromDate: moment(this.fromDate.value).toDate(),
      toDate: moment(this.toDate.value).toDate(),
    };
   //console.log('payload search', payload);

    this.onChange.emit(payload);
  }



}
