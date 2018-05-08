import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { AboutHomeComponent } from './about-home/about-home.component';
import { AboutAllUsersComponent } from './about-all-users/about-all-users.component';
import {UsersResolverService} from '../users-resolver.service'
import { AboutUserComponent } from './about-user/about-user.component';
import { UserResolverService } from '../user-resolver.service';

let aboutRoutes: Routes = [
  {
    path: '',
    component: AboutHomeComponent,
    children: [
      {
        path: '',
        component: AboutAllUsersComponent,
        resolve:{
          users:UsersResolverService
        }
      },
       {
        path: ':userId',
        component: AboutUserComponent,
        resolve:{
          user:UserResolverService
        }
      }
    ]
  }
]


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(aboutRoutes)
  ],
  exports:[
    RouterModule
  ],
  declarations: [
    AboutHomeComponent,
    AboutAllUsersComponent,
    AboutUserComponent
  ]
})
export class AboutRoutingModule { }
