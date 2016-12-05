import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { BaseService } from './baseservice';


@Injectable()
export class ProblemService extends BaseService {

  constructor(protected http: Http) {
    super(http, 'problem');
  }

  addProject(problem, registration) {
    return this.http
      .post(this.app.url + this.entry + "/newProject/" + problem, JSON.stringify(registration), { headers: this.app.headers })
      .map(res => res.json());
  }

  getByProject(id) {
    return this.http
      .post(this.app.url + this.entry + "/findbyproject/" + id, { headers: this.app.headers })
      .map(res => res.json());
  }
}