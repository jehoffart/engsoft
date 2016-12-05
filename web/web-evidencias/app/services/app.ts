import { Headers } from '@angular/http';
import { AuthenticationService } from '../services/authentication.service';

export class App {
  
  public url: string;
  public headers: Headers;

  constructor() {
  	this.url = "http://localhost:3000/"; 
  	this.headers = new Headers({
		'Content-Type': 'application/json; charset=utf-8',
		'Authorization': localStorage.getItem('token') || ''
	});
  }
}