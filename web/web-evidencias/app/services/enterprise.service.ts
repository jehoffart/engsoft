import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { BaseService } from './baseservice';

@Injectable()
export class EnterpriseService extends BaseService {

  constructor(protected http: Http) {
    super(http, 'enterprise');
  }

	addProblem(enterpriseId, project) {
		return this.http
		.post(this.app.url + this.entry + "/newProblem/" + enterpriseId, JSON.stringify(project), { headers: this.app.headers })
		.map(res => res.json());
	}
}