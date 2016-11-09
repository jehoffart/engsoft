import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions  } from '@angular/http';
import 'rxjs/add/operator/map';
import { Problem } from '../models/problem';
import { StorageService } from './storage-service';

/*
  Generated class for the ProblemService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ProblemService {

public operator: any;

  constructor(public storage:StorageService, public http: Http) {
    console.log('Hello ProblemService Provider');
    this.storage.getSession().then(
      data => this.operator = data.operator,
      error => console.error(error)
    );
  }

  addProblem(problem:Problem){
    let headers = new Headers({'Content-Type': 'application/json'});
    headers.append("Authorization", this.operator.token);
    let options = new RequestOptions({headers: headers});
    // Note: This is only an example. The following API call will fail because there is no actual API to talk to.
    return this.http.post('http://srv-facens9848.cloudapp.net:4000/problem', problem, options).map((res:Response) => res.json());
  }

  getAllProblems()
  {
    let headers = new Headers({'Content-Type': 'application/json'});
    headers.append("Authorization", this.operator.token);
    let options = new RequestOptions({headers: headers});
    return this.http.get('http://srv-facens9848.cloudapp.net:4000/problem', options).map(res => <Array<Problem>>(res.json()));
  }

}
