import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions  } from '@angular/http';
import { Project } from '../models/project'
import { StorageService } from './storage-service';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

/*
  Generated class for the ProjectService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ProjectService {

  public token: string;
  projects:any;

  constructor(public storage:StorageService, public http: Http) {
    console.log('Hello ProjectService Provider');
    this.storage.getSession().then(
      data => {
        this.token = data.operator.token;
      },
      error => console.error(error)
    );
  }
  addProject(project:Project){
    console.log(this.token);
    let headers = new Headers({'Content-Type': 'application/json'});
    headers.append("Authorization", this.token);
    let options = new RequestOptions({headers: headers});
    // Note: This is only an example. The following API call will fail because there is no actual API to talk to.
    return this.http.post('http://srv-facens9848.cloudapp.net:4000/project', project, options).map((res:Response) => res.json());
  }

  getAllProjects()
  {
    let headers = new Headers({'Content-Type': 'application/json'});
    headers.append("Authorization", this.token);
    let options = new RequestOptions({headers: headers});
    return this.http.get('http://srv-facens9848.cloudapp.net:4000/project', options).map(res => <Array<Project>>(res.json()));
  }

}
