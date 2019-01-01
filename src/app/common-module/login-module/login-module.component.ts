import { Component, OnInit } from '@angular/core';
import { Login } from '../../models/login/login';
import { RestApi } from '../../utils/services/rest-calls';
import { Response } from '../../models/response/Response';
import { CommonService } from '../../utils/storage/common.service';
import { LoggedInUser } from '../../models/login/user/logged-in-user';

@Component({
  selector: 'login-module',
  templateUrl: './login-module.component.html',
  styleUrls: ['./login-module.component.css']
})
export class LoginModuleComponent implements OnInit {
  login:Login = {
    userName:null,
    password:''
  };
  loggedInUser:LoggedInUser;
  constructor(
    private rest:RestApi,
    private storage:CommonService
  ) { }

  ngOnInit() {
  }

  singIn():void {
    console.log(this.login);
    this.rest.fetch('/login', this.login, 'post').subscribe((res:Response) => {
      this.storage.setToken(res.token); //saving token
      this.rest.fetch('/details', null, 'get').subscribe((res:Response) => {
        this.loggedInUser = <LoggedInUser>res.data;
        console.log(this.loggedInUser);
        this.storage.setLoggedInUser(this.loggedInUser); //saving user
      })
    });
  }
}
