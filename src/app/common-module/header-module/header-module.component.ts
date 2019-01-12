import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../utils/storage/common.service';
import { LoggedInUser } from '../../models/login/user/logged-in-user';
import { Router } from '@angular/router';

@Component({
  selector: 'peer-header',
  templateUrl: './header-module.component.html',
  styleUrls: ['./header-module.component.css']
})
export class HeaderModuleComponent implements OnInit {
  hasAnyOneLoggedIn:boolean = false;
  loggedInUser:LoggedInUser;
  constructor(private storage:CommonService, private router:Router) { }

  ngOnInit() {
    this.storage.userLoggedIn.subscribe((loggedInUser:LoggedInUser) => {
      this.hasAnyOneLoggedIn = true;
      this.loggedInUser = loggedInUser;
      console.log(loggedInUser.firstName+' has logged in');
    });

  }
  isNavBarOpen = false;
  toggleNav():void {
    this.isNavBarOpen = !this.isNavBarOpen;
  }

  logout(): void {
    this.storage.setToken(null);
    this.hasAnyOneLoggedIn = false;
    this.router.navigateByUrl("login");
  }
}
