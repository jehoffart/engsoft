import { Headers } from '@angular/http';

export class App {
  
  public url: string;
  public token: string;
  public headers: Headers;
  
  constructor() {
  	this.url = "http://localhost:8080/"; 
  	this.token = "token";
  	this.headers = new Headers(
  		{
  			'Content-Type': 'application/json; charset=utf-8'
  		}
  	);
  }
}