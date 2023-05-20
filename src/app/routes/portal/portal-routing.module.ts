import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestingComponent } from './testing/testing.component';
import { GridComponent } from './grid/grid.component';

const routes: Routes = [
  { path: '', component: TestingComponent},
  { path: ':id', component: GridComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortalRoutingModule { }
