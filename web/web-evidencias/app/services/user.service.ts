import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { User } from '../models/User';

@Injectable()
export class UserService {
  
  private url: string = 'http://localhost:8080/user/';
  private users: User[] = [];

  constructor(private http: Http) {}
    
  get() {
    this.http.get(this.url)
        .map(res => res.json())
        .subscribe(
          (users) => {
            users.forEach( (userData: Object) => {
              var user: User = new User(userData);
              this.users.push(user);
          });
        }
    );
    return this.users;
  }

  post(user) {
    return this.http
      .post(this.url, JSON.stringify(user))
      .map(res => res.json());
  }

  getById(id) {
    return this.http.get(this.url + '/${id}')
      .map(res => res.json());
  }

  put(users) {
    return this.http
      .post(this.url + '/${user.id}', JSON.stringify(users))
      .map(res => res.json());
  }
}