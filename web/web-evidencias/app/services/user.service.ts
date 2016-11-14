import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { User } from '../models/User';
import { Observable } from 'rxjs/Observable';
import { App } from './app';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
  
  private users: User[] = [];
  private app: App = new App();
  private url = "user";

  constructor(private http: Http) {}
    
  get() {
    return this.http.get(this.app.url + this.url, { headers: this.app.headers })
        .map(res => res.json());
  }

  post(user) {
    return this.http.post(this.app.url + this.url, JSON.stringify(user), { headers: this.app.headers })
      .map(res => res.json());
  }

  getById(id) : Observable<User> {
    return this.http.get(this.app.url + this.url + "/" + id, { headers: this.app.headers })
      .map(res => <User> res.json());
  }

  put(user) {
    return this.http
      .put(this.app.url + this.url + user._id, JSON.stringify(user), { headers: this.app.headers })
      .map(res => <User> res.json());
  }

  delete(id) {
    return this.http
      .delete(this.app.url + this.url + "/" + id, { headers: this.app.headers });
  }
}