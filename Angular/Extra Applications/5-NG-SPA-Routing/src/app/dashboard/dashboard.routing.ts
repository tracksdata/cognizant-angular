import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { AuthGuardService } from '../auth-guard.service';
import { DashboardUsersComponent } from './dashboard-users/dashboard-users.component';
import { DashboardUserDetailsComponent } from './dashboard-user-details/dashboard-user-details.component';
import { DashboardUsersHomeComponent } from './dashboard-users-home/dashboard-users-home.component';
import { StateCheckGuardService } from '../state-check-guard.service'


export const dashboardRoutes: Routes = [
  {
    path: 'dashboard',
    children: [
      {
        path: '',
        component: DashboardComponent,
        canActivate: [AuthGuardService],
      },
      {
        path: 'users',
        component: DashboardUsersComponent,
        canActivateChild: [AuthGuardService],
        children: [
          {
            path: '',
            component: DashboardUsersHomeComponent
          },
          {
            path: ':userName',
            component: DashboardUserDetailsComponent,
            canDeactivate: [StateCheckGuardService]
          }
        ]
      }
    ]
  },

];

export const dashboardRouting: ModuleWithProviders = RouterModule.forChild(dashboardRoutes);