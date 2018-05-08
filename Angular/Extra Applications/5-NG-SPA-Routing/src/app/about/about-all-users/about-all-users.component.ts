import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import { User } from '../../user';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about-all-users',
  templateUrl: './about-all-users.component.html',
  styleUrls: ['./about-all-users.component.css']
})
export class AboutAllUsersComponent implements OnInit {

  users: any = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.users = data.users;
    })
  }

}
