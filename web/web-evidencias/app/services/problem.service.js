import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import {Problem} from '../models/Problem';

@Injectable()
export class ProblemService {
  
  private url: string = 'http://localhost:8080/problem/';

  constructor(http: Http) {
    this._http = http;
  }

  get() {
    problems: Problem[] = [];
    this.http.get(this.url)
        .map(res => res.json())
        .subscribe(
          (problems) => {
            problems.forEach( (problemData: Object) => {
              var problem: Problem = new Problem(problemData);
              this.problems.push(problem);
          });
        }
    );
    return problems;
  }

  post(problem) {
    return this._http
      .post(url, JSON.stringify(problem))
      .map(res => res.json());
  }

  get(id) {
    return this._http.get(url + '/${id}')
      .map(res => res.json());
  }

  put(problem) {
    return this._http
      .post(url + '/${problem.id}', JSON.stringify(problem))
      .map(res => res.json());
  }
}