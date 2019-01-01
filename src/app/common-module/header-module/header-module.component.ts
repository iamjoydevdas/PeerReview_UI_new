import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../utils/storage/common.service';
import { LoggedInUser } from '../../models/login/user/logged-in-user';

@Component({
  selector: 'peer-header',
  templateUrl: './header-module.component.html',
  styleUrls: ['./header-module.component.css']
})
export class HeaderModuleComponent implements OnInit {
  hasAnyOneLoggedIn:boolean = false;

  constructor(private storage:CommonService) { }

  ngOnInit() {
    this.storage.userLoggedIn.subscribe((loggedInUser:LoggedInUser) => {
      this.hasAnyOneLoggedIn = true;
      console.log(loggedInUser.firstName+' has logged in');
    });

  }
  isNavBarOpen = false;
  toggleNav():void {
    this.isNavBarOpen = !this.isNavBarOpen;
  }
}
