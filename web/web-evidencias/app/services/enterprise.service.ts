import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { BaseService } from './baseservice';

@Injectable()
export class EnterpriseService extends BaseService {

  constructor(protected http: Http) {
    super(http, 'enterprise');
  }
}