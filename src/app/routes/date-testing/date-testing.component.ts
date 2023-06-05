import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-date-testing',
  templateUrl: './date-testing.component.html',
  styleUrls: ['./date-testing.component.scss']
})
export class DateTestingComponent {

  minDate: any;
  maxDate: any;
  todayDate: any;
  frommaxDate: moment.Moment;

  fromDate = new FormControl();
  toDate = new FormControl();

  constructor() {
    this.frommaxDate = moment();
  }

  clickFromDate() {

    const BeforeDate = moment(this.fromDate.value);
    const AddedDate = BeforeDate.add(90, 'days');
    const CurrentDate = moment(new Date());

    this.toDate.setValue((AddedDate > CurrentDate) ? CurrentDate : AddedDate.toDate());
    this.minDate = moment(this.fromDate.value).toDate();
    this.maxDate = ((BeforeDate.days() + 90 > CurrentDate.days()) ? moment(this.toDate.value) : moment(this.fromDate.value).add(90, 'days').toDate())

  }

  clickSearch() {
  
    const Date1 = (moment(this.fromDate.value)).format('DD-MM-YYYY hh:mm:ss');
    const Date2 = (moment(this.toDate.value)).format('DD-MM-YYYY hh:mm:ss');
    const payload = {
      fromDate: Date1,
      toDate: Date2,
    };
    console.log('payload search', payload);
  }
}
