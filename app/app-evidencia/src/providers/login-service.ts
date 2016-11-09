import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Login} from '../models/login'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

/*
Generated class for the LoginService provider.

See https://angular.io/docs/ts/latest/guide/dependency-injection.html
for more info on providers and Angular 2 DI.
*/
@Injectable()
export class LoginService {

  constructor(public http: Http) {
    console.log('Hello LoginService Provider');
  }

  auth(login:Login){
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    // Note: This is only an example. The following API call will fail because there is no actual API to talk to.
    return this.http.post('http://srv-facens9848.cloudapp.net:4000/auth', login, options).map((res:Response) => res.json());
  }

}
