import { Component, OnInit } from '@angular/core';
import { Login } from '../../models/login/login';
import { RestApi } from '../../utils/services/rest-calls';
import { Response } from '../../models/response/Response';
import { CommonService } from '../../utils/storage/common.service';
import { LoggedInUser } from '../../models/login/user/logged-in-user';
import { Router } from '@angular/router';
import { Statics } from '../../models/statics/statics';

@Component({
  selector: 'login-module',
  templateUrl: './login-module.component.html',
  styleUrls: ['./login-module.component.css']
})
export class LoginModuleComponent implements OnInit {
  static: Statics[] = [];
  login:Login = {
    userName:null,
    password:''
  };
  loggedInUser:LoggedInUser;
  constructor(
    private rest:RestApi,
    private storage:CommonService,
    private router:Router
  ) {
      
   }

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
        this.rest.fetch('/statics', null, 'get').subscribe((staticResponse: Response) => {
          this.static = <Statics[]>staticResponse.dataList;
          for(var i = 0; i < this.static.length; i++){
            if(this.static[i].staticType == 'ROLE'){
              this.storage.setRoles(this.static[i]);
            } else if(this.static[i].staticType == 'DESIGNATION'){
              this.storage.setDesignation(this.static[i]);
            } else if(this.static[i].staticType == 'SKILLS'){
              this.storage.setSkill(this.static[i]);
            }
          }
          switch(this.loggedInUser.role){
            case 'ADMIN':
              this.router.navigateByUrl('dashboard/admin/view');
              break;
            case 'REVIEWER':
              break;
            case 'EVALUTER':
              this.router.navigateByUrl('rate');
              break;
          }
        });
      })
    });
  }
}
