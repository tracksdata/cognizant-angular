import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router'

@Injectable()
export class StateCheckGuardService implements CanDeactivate<any> {

  constructor() { }

  canDeactivate() {
    window.alert('Are u sure?');
    return true;
  }

}
