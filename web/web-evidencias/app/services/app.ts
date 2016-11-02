import { Headers } from '@angular/http';
import { AuthenticationService } from '../services/authentication.service';

export class App {
  
  public url: string;
  public token: string;
  public user: string;
  public type: string;
  public headers: Headers;

  constructor() {
  	this.url = "http://srv-facens9848.cloudapp.net:3000/"; 
  	this.token = "token";
    this.user = "id";
    this.type = "type";
  	this.headers = new Headers(
  		{
  			'Content-Type': 'application/json; charset=utf-8',
        'Authorization': this.getJWT()
  		}
  	);
  }

  getJWT() {
    if(localStorage.getItem(this.token))
      return localStorage.getItem(this.token);
  }

  getToken() {
    if(localStorage.getItem(this.token))
      return localStorage.getItem(this.user);
  }
}