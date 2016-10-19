import { Injectable } from '@angular/core';
import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { BaseService } from './base-service';
import 'rxjs/add/operator/map';

import {Problem} from '../models/Problem';
import {Project} from '../models/Project';
/*
  Generated class for the ProblemService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Component({
  providers: [BaseService]
})

@Injectable()
export class ProblemService {

  constructor(public http: Http, private baseService: BaseService) {
    console.log('Hello ProblemService Provider');
  }

  public getById(id) : any{
    return this.baseService.get("http://localhost:3000/problem/:" + id).map(res => <Problem>(res.json()));
  }

  public get() : any{
    //console.log(this.baseService.get("https://randomuser.me/api/?results=10"));
    return this.baseService.get("http://localhost:3000/problem").map(res => (res.json()));
    //console.log(res);
  }
  public post(problem: Problem){
    return  this.baseService.post("http://localhost:3000/problem",(problem)).subscribe(res => {
      console.log(res);
    });
  }

  public registerProject(id,project : Project ) : any{
    return this.baseService.post("http://localhost:3000/problem/newRegistration/:" + id, project).subscribe(res => {
      console.log(res);
    });
  }

  public put(problem:Problem, id) : any{
      return this.baseService.put("http://localhost:3000/problem/:" + id,problem).subscribe(res => {
        console.log(res);
      });
  }

  public delete(id:any) : any{
      return this.baseService.delete("http://localhost:3000/problem/:" + id).subscribe(res => {
        console.log(res);
      });
  }

}
