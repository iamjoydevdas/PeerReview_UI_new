import { Component, OnInit } from '@angular/core';
import { Login } from '../../models/login/login';
import { RestApi } from '../../utils/services/rest-calls';
import { Response } from '../../models/response/Response';

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
  constructor(
    private rest:RestApi
  ) { }

  ngOnInit() {
  }

  singIn():void {
    console.log(this.login);
    this.rest.fetch('/login', this.login, 'post').subscribe((res:Response) => console.log(res));
  }
}
