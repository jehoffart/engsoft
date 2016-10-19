import { Injectable } from '@angular/core';
import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { BaseService } from './base-service';
import 'rxjs/add/operator/map';

import {User} from '../models/User'

@Component({
  providers: [BaseService]
})

@Injectable()
export class UserService {

  private url:string;

  constructor(public http: Http, private baseService: BaseService) {
    console.log('Hello UserService Provider');
  }

  public getById(id){

  }

  public get(){
    //console.log(this.baseService.get("https://randomuser.me/api/?results=10"));
    this.baseService.get("http://localhost:3000/user").map(res => res.json()).subscribe(res => {
      console.log(res);
    });
    //console.log(res);
  }
  public post(user: User){
    return  this.baseService.post("http://localhost:3000/user",JSON.stringify(user)).subscribe(res => {
      console.log(res);
    });;
  }

  public put(user){

  }

  public delete(id:any){

  }
}
