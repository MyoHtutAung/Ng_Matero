import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortalRoutingModule } from './portal-routing.module';
import { GridComponent } from './grid/grid.component';
import { TestingComponent } from './testing/testing.component';
import { SharedModule } from '@shared';
import { ScafDateComponent } from '../scaf-date/scaf-date.component';

const COMPONENTS : any[] = [GridComponent,TestingComponent,ScafDateComponent]

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    CommonModule,
    PortalRoutingModule,
    SharedModule
  ]
})
export class PortalModule { }
