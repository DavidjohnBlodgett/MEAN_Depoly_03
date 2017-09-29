import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../_services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    constructor( private _redirect: Router, private _usersService: UsersService ) {
        this.handleLogin(prompt('Please enter your name:'));
        this._redirect.navigate(['/dashboard']);
    }

    ngOnInit() {
    }

    handleLogin(username) {
        this._usersService.setUserName(username);
    }

}
