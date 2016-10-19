import { Injectable } from '@angular/core';
import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { BaseService } from './base-service';
import 'rxjs/add/operator/map';

import {User} from '../models/User';

@Component({
  providers: [BaseService]
})

@Injectable()
export class UserService {

  private baseUrl: string;

  private url:string;

  constructor(public http: Http, private baseService: BaseService) {
    console.log('Hello UserService Provider');
    this.baseUrl = "http://localhost:3000/user/";
  }

  public getById(id) : any{
    return this.baseService.get(this.baseUrl + id).map(res => <User>(res.json()));
  }

  public get() : any{
    //console.log(this.baseService.get("https://randomuser.me/api/?results=10"));
    return this.baseService.get(this.baseUrl).map(res => <Array<User>>(res.json()));
    //console.log(res);
  }
  public post(user: User){
    return  this.baseService.post(this.baseUrl,(user)).subscribe(res => {
      console.log(res);
    });
  }

  public put(user:User, id) : any{
      return this.baseService.put(this.baseUrl + id,user).subscribe(res => {
        console.log(res);
      });
  }

  public delete(id:any) : any{
      return this.baseService.delete(this.baseUrl + id).subscribe(res => {
        console.log(res);
      });
  }


}
