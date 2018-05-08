import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log('Auth Guard...');

    // this.router.navigate(['login']);
    // return false;

    return true;
  }


  canActivateChild() {
    console.log('checking child route access');
    //this.router.navigate(['permission']);
    return true;
  }

}
