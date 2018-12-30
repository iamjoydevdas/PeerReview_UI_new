import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/observable/throw';

@Injectable()
export class RestApi {
  baseUrl:string = "http://localhost:8080/PeerReview/rest/pr";
  constructor(
    public http: HttpClient
  ) {}

  public fetch(url:string, data:any, apiType:string ) :Observable<any>{
     console.log('Calling API -> '+ (this.baseUrl+url));
    // return this.http.post('https://thisurliswrong123123.com', {});
    switch(apiType){
      case 'get':
      case 'GET':
        //return this.http.
        break;
      case 'post':
      case 'POST':
        return this.http.post(this.baseUrl+url, data);
    }
  }
}