import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { dashboardRouting } from './dashboard.routing';
import { UserService } from '../user.service';
import { AuthGuardService } from '../auth-guard.service';
import { DashboardUsersComponent } from './dashboard-users/dashboard-users.component';
import { DashboardUserDetailsComponent } from './dashboard-user-details/dashboard-user-details.component';
import { DashboardUsersHomeComponent } from './dashboard-users-home/dashboard-users-home.component';
import { StateCheckGuardService } from 'app/state-check-guard.service';
 
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    dashboardRouting
  ],
  declarations: [
    DashboardComponent,
    DashboardUsersComponent,
    DashboardUserDetailsComponent,
    DashboardUsersHomeComponent
  ],
  providers: [
    UserService,
    AuthGuardService,
    StateCheckGuardService
  ]
})
export class DashboardModule { }