import { Injectable, Output, EventEmitter } from '@angular/core';
import { LoggedInUser } from '../../models/login/user/logged-in-user';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  token:string;
  loggedInUser:LoggedInUser;

  constructor() { }

  @Output() userLoggedIn: EventEmitter<LoggedInUser> = new EventEmitter();

  setToken(token:string):void {
    this.token = token;
  }
  getToken():string {
    return this.token;
  }
  setLoggedInUser(loggedInUser:LoggedInUser):void {
    this.loggedInUser = loggedInUser;
    this.userLoggedIn.emit(this.loggedInUser);
  }
  getLoggedInUser():LoggedInUser {
    return this.loggedInUser;
  }
}
