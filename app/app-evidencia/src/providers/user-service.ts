import { Injectable } from '@angular/core';
import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { BaseService } from './base-service';
import 'rxjs/add/operator/map';

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
    console.log(this.baseService.get("https://randomuser.me/api/?results=10"));
    //console.log(res);
  }
  public post(user){

  }

  public put(user){

  }

  public delete(id:any){

  }
}
