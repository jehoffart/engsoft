import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { App } from './app';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {

  private app: App = new App();
  
  constructor(private http: Http) {}

  login(login: string, password: string){
    var data = {"Login": login, "Password": password };
    
    return this.http
      .post(this.app.url + "auth", data)
      .map(res => res.json());
  }
}
