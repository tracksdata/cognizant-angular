import { Injectable } from '@angular/core';
import { User } from './user';

const users = [
  {
    id: 1,
    name: 'Nagabhushanam',
    userName: 'Nag',
    avatar: ''
  },
  {
    id: 2,
    name: 'Ria',
    userName: 'ria',
    avatar: ''
  }
]

@Injectable()
export class UserService {

  constructor() { }

  getUsers() {
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(users);
      }, 0)
    });
    return promise;
  }

  getUser(id) {
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        let user = users.find(user => user.userName === id);
        resolve(user);
      }, 0)
    });
    return promise;
  }

}
