import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../_services/users.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor( private _redirect: Router, private _usersService: UsersService ) {
      this._usersService.logoffUser();
      this._redirect.navigate(['']);
  }

  ngOnInit() {
  }

}
