import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { PortalService } from '../portal.service';
import { updateOptionValue } from 'app/counter.actions';
import { Store } from '@ngrx/store';


@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.scss'],
  providers: [PortalService],
})
export class TestingComponent implements OnInit, AfterViewInit {
  list: any;
  firstone: any;
  option1: any;
  id: any;

  constructor(private portalservice: PortalService, private store: Store) {
    this.list = this.portalservice.getAccountList();
    this.firstone = this.list[0];
  }
  
  ngAfterViewInit(): void {}

  ngOnInit(): void {}

  onSelectionChange(event: any): void {
    const { value } = event;
    this.store.dispatch(updateOptionValue({ optionId: value, value }));
  }

  
}
