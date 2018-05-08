import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutRoutingModule } from './about-routing.module';
import { UserService } from '../user.service';
import {UsersResolverService} from '../users-resolver.service'
import { UserResolverService } from '../user-resolver.service';

@NgModule({
  imports: [
    CommonModule,
    AboutRoutingModule
  ],
  declarations: [

  ],
  providers:[
    UserService,
    UsersResolverService,
    UserResolverService
  ]
})
export class AboutModule { }
