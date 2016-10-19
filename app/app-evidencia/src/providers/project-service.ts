import { Injectable } from '@angular/core';
import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { BaseService } from './base-service';
import 'rxjs/add/operator/map';

import {Project} from '../models/Project';
import {User} from '../models/User';

/*
  Generated class for the ProjectService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Component({
  providers: [BaseService]
})

@Injectable()
export class ProjectService {

  constructor(public http: Http, private baseService: BaseService) {
    console.log('Hello ProjectService Provider');
  }

  public getById(id) : any{
    return this.baseService.get("http://localhost:3000/project/" + id).map(res => <Project>(res.json()));
  }

  public get() : any{
    //console.log(this.baseService.get("https://randomuser.me/api/?results=10"));
    return this.baseService.get("http://localhost:3000/project").map(res => <Array<Project>>(res.json()));
    //console.log(res);
  }
  public post(project: Project){
    return  this.baseService.post("http://localhost:3000/project",(project)).subscribe(res => {
      console.log(res);
    });
  }

  public put(project:Project, id) : any{
      return this.baseService.put("http://localhost:3000/project/" + id,project).subscribe(res => {
        console.log(res);
      });
  }

  public delete(id:any) : any{
      return this.baseService.delete("http://localhost:3000/project/" + id).subscribe(res => {
        console.log(res);
      });
  }

  public getUsers(id) : any{
    return this.baseService.get("http://localhost:3000/project/findbyuser/" + id).map(res => <Array<Project>>(res.json));
  }

}
