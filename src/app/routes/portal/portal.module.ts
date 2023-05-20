import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortalRoutingModule } from './portal-routing.module';
import { GridComponent } from './grid/grid.component';
import { TestingComponent } from './testing/testing.component';
import { SharedModule } from '@shared';

const COMPONENTS : any[] = [GridComponent,TestingComponent]

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
