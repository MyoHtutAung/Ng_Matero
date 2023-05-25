import { Component, Input, OnInit } from '@angular/core';
import { PortalService } from '../portal.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.scss'],
  providers: [PortalService],
})
export class TestingComponent implements OnInit {
  list: any;
  firstone: any;
  option1: any;
  id: any;

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });


  constructor(private portalservice: PortalService,private _formBuilder: FormBuilder) {
    this.list = this.portalservice.getAccountList();
    this.firstone = this.list[0];
  }

  ngOnInit(): void {}
}
