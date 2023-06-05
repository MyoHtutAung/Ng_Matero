import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { environment } from '@env/environment';

import { AdminLayoutComponent } from '../theme/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from '../theme/auth-layout/auth-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './sessions/login/login.component';
import { RegisterComponent } from './sessions/register/register.component';
import { Error403Component } from './sessions/403.component';
import { Error404Component } from './sessions/404.component';
import { Error500Component } from './sessions/500.component';
import { AuthGuard } from '@core';
import { DateTestingComponent } from './date-testing/date-testing.component';
import { ScafDateComponent } from './scaf-date/scaf-date.component';
import { OtpComponent } from './otp/otp.component';
import { TestpagiComponent } from './testpagi/testpagi.component';

const routes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      { path: '', redirectTo: 'test', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: '403', component: Error403Component },
      { path: '404', component: Error404Component },
      { path: '500', component: Error500Component },
      {
        path: 'test',
        loadChildren: () => import('./portal/portal.module').then(m => m.PortalModule),
      },
      {
        path: 'branch',
        loadChildren: () => import('./branch/branch.module').then(m => m.BranchModule),
      },
     /*  { path: 'branch', component: BranchComponent} */
     { path: 'date', component: DateTestingComponent},
     { path: 'scalf', component: ScafDateComponent},
     { path: 'otp', component: OtpComponent}
    ],
  },
  {
    path: 'auth',
    component: AuthLayoutComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'pagi', component: TestpagiComponent}
    ],
  },
  { path: '**', redirectTo: 'dashboard' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: environment.useHash,
    }),
  ],
  exports: [RouterModule],
})
export class RoutesRoutingModule {}
