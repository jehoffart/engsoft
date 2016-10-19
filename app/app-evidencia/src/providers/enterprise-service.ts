import { Injectable } from '@angular/core';
import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { BaseService } from './base-service';
import 'rxjs/add/operator/map';

import {Enterprise} from '../models/Enterprise';

@Component({
  providers: [BaseService]
})

@Injectable()
export class EnterpriseService {

  constructor(public http: Http, private baseService: BaseService) {
    console.log('Hello EnterpriseService Provider');
  }
  public getById(id) : any{
    return this.baseService.get("http://localhost:3000/enterprise/" + id).map(res => <Enterprise>(res.json()));
  }

  public get() : any{
    //console.log(this.baseService.get("https://randomuser.me/api/?results=10"));
    return this.baseService.get("http://localhost:3000/enterprise").map(res => <Array<Enterprise>>(res.json()));
    //console.log(res);
  }
  public post(enterprise: Enterprise){
    return  this.baseService.post("http://localhost:3000/enterprise",(enterprise)).subscribe(res => {
      console.log(res);
    });
  }

  public put(enterprise:Enterprise, id) : any{
      return this.baseService.put("http://localhost:3000/enterprise/" + id,enterprise).subscribe(res => {
        console.log(res);
      });
  }

  public delete(id:any) : any{
      return this.baseService.delete("http://localhost:3000/enterprise/" + id).subscribe(res => {
        console.log(res);
      });
  }
}
