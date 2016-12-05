import { Http, Response, Headers } from '@angular/http';
import { App } from './app';

export class BaseService {
  
  protected app: App = new App();

  constructor(protected http: Http, 
              protected entry: string) {}  

  get() {
    return this.http.get(this.app.url + this.entry, { headers: this.app.headers })
        .map(res => res.json());
  }

  post(object) {
    return this.http.post(this.app.url + this.entry, JSON.stringify(object), { headers: this.app.headers })
      .map(res => res.json());
  }

  getById(id) {
    return this.http.get(this.app.url + this.entry + "/" + id, { headers: this.app.headers })
      .map(res => res.json());
  }

  put(object) {
    return this.http
      .put(this.app.url + this.entry + '/' + object._id, JSON.stringify(object), { headers: this.app.headers })
      .map(res => res.json());
  }

  delete(id) {
    return this.http
      .delete(this.app.url + this.entry + "/" + id, { headers: this.app.headers });
  }
}