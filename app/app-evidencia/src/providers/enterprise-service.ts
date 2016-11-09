import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions  } from '@angular/http';
import 'rxjs/add/operator/map';
import { Enterprise } from '../models/enterprise'

/*
  Generated class for the EnterpriseService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class EnterpriseService {

  constructor(public http: Http) {
    console.log('Hello EnterpriseService Provider');
  }
addEnterprise(enterprise:Enterprise){
  let headers = new Headers({'Content-Type': 'application/json'});
  let options = new RequestOptions({headers: headers});
  // Note: This is only an example. The following API call will fail because there is no actual API to talk to.
  return this.http.post('http://srv-facens9848.cloudapp.net:4000/enterprise', enterprise, options).map((res:Response) => res.json());
}

}
