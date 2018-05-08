import { Injectable } from '@angular/core';
import { Resolve, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { UserService } from './user.service';

@Injectable()
export class UserResolverService implements Resolve<any> {

  constructor(private route: ActivatedRoute, private userService: UserService) { }

  resolve(route: ActivatedRouteSnapshot) {
    let id = route.params['userId']
    return this.userService.getUser(id);
  }

}
