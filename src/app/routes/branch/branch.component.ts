import { Component, OnInit } from '@angular/core';
import { MtxGridColumn } from '@ng-matero/extensions/grid';
import { BranchService } from './branch.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.scss'],
  providers: [BranchService]
})
export class BranchComponent implements OnInit{

  constructor(
    private branchService: BranchService,
    private router : Router
  ){}

  ngOnInit(): void {
    this.list = this.branchService.getAllBranch();
  }

  list: any[] = [];

  columns: MtxGridColumn[] = [
    {
      header:'BranchName',
      field: 'branchName'
    },
    {
      header:'BranchCode',
      field: 'branchCode'
    },
    {
      header:'BranchPhone',
      field: 'branchPhone'
    },
    {
      header: 'Action',
      field: 'action'
    }
  ]

  AddNew(){
    this.router.navigateByUrl('branch/branch-details');
  }

  updateBranch(){
    
  }
}
