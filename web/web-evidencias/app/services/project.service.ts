import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { BaseService } from './baseservice';

@Injectable()
export class ProjectService extends BaseService {

  constructor(protected http: Http) {
    super(http, 'project');
  }

  findByUser(userId) {
    return this.http
      .get(this.app.url + this.entry + "/findbyuser/" + userId, { headers: this.app.headers })
      .map(res => res.json());
  }
}