import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { App } from './app';
import 'rxjs/add/operator/map';
import { Login } from '../models/Login';

@Injectable()
export class AuthenticationService {

  private app: App = new App();
  private auth: Login;

  constructor(private http: Http) {}

  logout() {
    if(!!localStorage.removeItem(this.app.token)) {
      localStorage.removeItem(this.app.token);
      window.location.href = "/login";
    }
  }

  login(login: string, password: string){
    var data = JSON.stringify({"Login": login, "Password": password})  
    
    this.http
      .post(this.app.url, data)
      .map(res => res.json())
      .subscribe(login => this.auth = login);

    if(!!this.auth) {
      localStorage.setItem(this.app.token, this.auth.token);
      localStorage.setItem(this.app.user, this.auth.loginId);
      localStorage.setItem(this.app.type, this.auth.type);
      window.location.href = "/problem";
      return true;
    }
    
    return false;
  }

   checkCredentials( ){
    if (localStorage.getItem(this.app.token) === null && window.location.pathname !== "/login"){
      window.location.href = "/login";
    }
  }

  isEnterprise() {
    if(localStorage.getItem(this.app.type) == "enterprise") 
      return true;

    return false;
  }

  isUser() {
    if(localStorage.getItem(this.app.type) == "user") 
      return true;

    return false;
  }

  getToken() {
    if(localStorage.getItem(this.app.user))
      return localStorage.getItem(this.app.user);
  }
}
