import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Enterprise } from '../models/Enterprise';
import { Observable } from 'rxjs/Observable';
import { App } from './app';
import 'rxjs/add/operator/map';

@Injectable()
export class EnterpriseService {
  
  private app: App = new App();
  private url = "enterprise";

  constructor(private http: Http) {}  
  get() {
    return this.http.get(this.app.url + this.url)
        .map(res => res.json());
  }

  post(enterprise) {
    return this.http.post(this.app.url + this.url, JSON.stringify(enterprise), { headers: this.app.headers })
      .map(res => res.json());
  }

  getById(id) : Observable<Enterprise> {
    return this.http.get(this.app.url + this.url + "/" + id)
      .map(res => <Enterprise> res.json());
  }

  put(enterprise) {
    return this.http
      .put(this.app.url + this.url + enterprise._id, JSON.stringify(enterprise))
      .map(res => <Enterprise> res.json());
  }

  delete(id) {
    return this.http
      .delete(this.app.url + this.url + "/" + id, { headers: this.app.headers });
  }
}