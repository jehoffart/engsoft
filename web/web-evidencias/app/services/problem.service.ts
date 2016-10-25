import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Problem } from '../models/Problem';
import { Observable } from 'rxjs/Observable';
import { App } from './app';
import 'rxjs/add/operator/map';

@Injectable()
export class ProblemService {
  
  private problems: Problem[] = [];
  private app: App = new App();
  private url = "problem";

  constructor(private http: Http) {}  
  get() {
    this.http.get(this.app.url + this.url)
        .map(res => res.json())
        .subscribe(
          (problems) => {
            problems.forEach( (problemData: Object) => {
              var problem: Problem = new Problem(problemData);
              this.problems.push(problem);
          });
        }
    );
    return this.problems;
  }

  post(problem) {
    return this.http.post(this.app.url + this.url, JSON.stringify(problem), { headers: this.app.headers })
      .map(res => res.json());
  }

  getById(id) : Observable<Problem> {
    return this.http.get(this.app.url + this.url + "/" + id)
      .map(res => <Problem> res.json());
  }

  put(problem) {
    return this.http
      .put(this.app.url + this.url + problem._id, JSON.stringify(problem))
      .map(res => <Problem> res.json());
  }

  delete(problem) {
    this.http
      .delete(this.app.url + this.url + problem._id);
  }
}