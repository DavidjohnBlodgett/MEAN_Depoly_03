import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import "rxjs";
import { Toolbox } from './-toolbox';

@Injectable()
export class UsersService {

    toolbox = new Toolbox();

    userName:any;

    constructor( private _http: Http ) { }

    setUserName(name) {
        this.userName = name;
    }
    getUserName() {
        return this.userName;
    }
    logoffUser() {
        this.userName = undefined;
    }
}
