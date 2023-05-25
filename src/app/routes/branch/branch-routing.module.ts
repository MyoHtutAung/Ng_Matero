import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BranchComponent } from './branch.component';
import { BranchDetailsComponent } from './branch-details/branch-details.component';

const routes: Routes = [
  {path: '', component: BranchComponent},
  { path: ':id', component: BranchDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BranchRoutingModule { }
