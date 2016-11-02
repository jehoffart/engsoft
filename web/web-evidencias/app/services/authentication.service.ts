import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { App } from './app';
import 'rxjs/add/operator/map';
import { Login } from '../models/Login';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable()
export class AuthenticationService {

  private app: App = new App();
  private auth: Login;

  constructor(private http: Http,
              private router: Router) {}

  logout() {
      localStorage.clear();
      this.router.navigate(['login/']);    
  }

  login(login: string, password: string){
    var data = {"Login": login, "Password": password };
    
    return this.http
      .post(this.app.url + "auth", data)
      .map(res => res.json());
  }

  setLocalStorage(auth) {
    if(!!auth.token) {
      this.auth = auth;
      localStorage.setItem(this.app.token, this.auth.token);
      localStorage.setItem(this.app.user, this.auth.loginId);
      localStorage.setItem(this.app.type, this.auth.type);
      this.router.navigate(['problem/']);
      return true;
    }
    
    return false;
  }

   checkCredentials(url : string) {
    var urlPath: string = window.location.pathname.toUpperCase();
    
    if (localStorage.getItem(this.app.token) === null && urlPath !== "/LOGIN" && urlPath.indexOf(url.toUpperCase()) > -1){
      this.router.navigate(['login/']);
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

  compareId(id : string) {
    if(localStorage.getItem(this.app.user) && localStorage.getItem(this.app.user) == id) 
      return true;
    return false;
  }
}
