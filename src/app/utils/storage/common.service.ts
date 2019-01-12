import { Injectable, Output, EventEmitter } from '@angular/core';
import { LoggedInUser } from '../../models/login/user/logged-in-user';
import { Statics } from '../../models/statics/statics';
import { RateSkills } from '../../models/ratings/RateSkills';
import { PeerRatings } from '../../models/ratings/PeerRatings';
import { User } from '../../models/login/user/User';
import { Ratings } from '../../models/ratings/Ratings';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  token:string;
  loggedInUser:LoggedInUser;
  skills:Statics[] = [];
  designation:Statics[] = [];
  role:Statics[] = [];
  peerRatings: PeerRatings;
  ratings:Ratings;

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
  setSkill(skill:Statics): void {
    this.skills.push(skill);
  }
  setDesignation(designation:Statics): void {
    this.designation.push(designation);
  }
  setRoles(role:Statics): void {
    this.role.push(role);
  }
  getSkills(): Statics[] {
    return this.skills;
  }
  getDesignations(): Statics[] {
    return this.designation;
  }
  getRoless(): Statics[] {
    return this.role;
  }
  setPeerRatings(skills:RateSkills[], user:User): void {
    this.ratings.peerId = user.userId;
    this.ratings.skills = skills;
    this.peerRatings.ratedBy = this.getLoggedInUser().userId;
    this.peerRatings.rated.push(this.ratings);
    console.log(this.peerRatings);
  }
}
