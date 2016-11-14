import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Problem } from '../models/Problem';
import { Observable } from 'rxjs/Observable';
import { App } from './app';
import 'rxjs/add/operator/map';

@Injectable()
export class ProblemService {
  
  private app: App = new App();
  private url = "problem";

  constructor(private http: Http) {}  
  get() {
    return this.http.get(this.app.url + this.url, { headers: this.app.headers })
        .map(res => res.json());
  }

  post(problem) {
    return this.http.post(this.app.url + this.url, JSON.stringify(problem), { headers: this.app.headers })
      .map(res => res.json());
  }

  addProject(problem, project) {
    return this.http
      .post(this.app.url + this.url + "/newRegistration/" + problem, JSON.stringify(project), { headers: this.app.headers })
      .map(res => res.json());
  }

  getById(id) : Observable<Problem> {
    return this.http.get(this.app.url + this.url + "/" + id, { headers: this.app.headers })
      .map(res => <Problem> res.json());
  }

  put(problem) {
    return this.http
      .put(this.app.url + this.url + problem._id, JSON.stringify(problem), { headers: this.app.headers })
      .map(res => <Problem> res.json());
  }

  delete(id) {
    return this.http
      .delete(this.app.url + this.url + "/" + id, { headers: this.app.headers });
  }
}