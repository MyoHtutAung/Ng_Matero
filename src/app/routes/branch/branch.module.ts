import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BranchRoutingModule } from './branch-routing.module';
import { BranchComponent } from './branch.component';
import { BranchDetailsComponent } from './branch-details/branch-details.component';
import { SharedModule } from '@shared';


@NgModule({
  declarations: [
    BranchComponent,
    BranchDetailsComponent
  ],
  imports: [
    CommonModule,
    BranchRoutingModule,
    SharedModule
  ]
})
export class BranchModule { }
