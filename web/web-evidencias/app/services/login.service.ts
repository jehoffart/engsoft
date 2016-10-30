import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { User } from '../models/User';

@Injectable()
export class LoginService {
  
  private url: string = 'http://localhost:8080/user/';
  
  constructor(private http: Http) {}
  
  post(user) {
    return this.http
      .post(this.url, JSON.stringify(user))
      .map(res => res.json());
  }

}