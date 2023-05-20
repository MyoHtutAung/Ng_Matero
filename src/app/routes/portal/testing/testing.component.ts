import { Component, OnInit } from '@angular/core';
import { MtxGridColumn } from '@ng-matero/extensions/grid';
import { EXAMPLE_DATA } from '@shared/interfaces/grid_data';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.scss'],
})
export class TestingComponent implements OnInit {
  //list : any = {};

  columns: MtxGridColumn[] = [
    { header: 'Name', field: 'name' },
    {
      header: 'Weight',
      field: 'weight',
      type: 'number',
      typeParameter: {
        digitsInfo: '1.2-2',
      },
    },
    { header: 'Gender', field: 'gender' },
    { header: 'Mobile', field: 'mobile' },
    { header: 'City', field: 'city' },
    {
      header: 'Date',
      field: 'date',
      type: 'date',
      typeParameter: {
        format: 'yyyy-MM-dd',
      },
    },
    { header: 'Football', field: 'Footballs'}
  ];

  list = EXAMPLE_DATA;

  ngOnInit(): void {}

  trackByName(index: number, item: any) {
    return item.name;
  }
}
