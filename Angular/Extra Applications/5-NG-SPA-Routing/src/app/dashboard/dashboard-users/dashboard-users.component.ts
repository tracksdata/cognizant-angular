import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-dashboard-users',
  templateUrl: './dashboard-users.component.html',
  styleUrls: ['./dashboard-users.component.css']
})
export class DashboardUsersComponent implements OnInit {

  users: any;

  constructor(private service: UserService) { }

  ngOnInit() {
    this.service.getUsers().then(users => this.users = users);
  }



}
