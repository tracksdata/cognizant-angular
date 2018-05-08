import { Injectable } from '@angular/core';

import { Resolve } from '@angular/router';
import { UserService } from './user.service';

@Injectable()
export class UsersResolverService implements Resolve<any> {

  constructor(private userService: UserService) { }

  resolve() {
    return this.userService.getUsers();
  }

}
