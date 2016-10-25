import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import { Http, Response, Headers } from '@angular/http';
import { App } from './app';

@Injectable()
export class AuthenticationService {

  private app: App = new App();

  constructor(private _router: Router, private http: Http){}

  logout() {
    localStorage.removeItem(this.app.token);
    this._router.navigate(['login']);
  }

  login(login: string, password: string){
    var data = JSON.stringify({"Login": login, "Password": password})  
    var token;

    this.http
      .post(this.app.url, data)
      .map(res => res.json()).subscribe((value: Response) => {
        token = value.json();
      });  

    if(!!token) {
      localStorage.setItem(this.app.token, token);
      this._router.navigate(['']);
      return true;
    }
    
    return false;
  }

   checkCredentials( ){
    if (localStorage.getItem(this.app.token) !== null){
        this._router.navigate(['login']);
    }
  }
}
