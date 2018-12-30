import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  token:string;
  constructor() { }
  
  setToken(token:string):void {
    this.token = token;
  }

  getToken():string {
    return this.token;
  }
}
