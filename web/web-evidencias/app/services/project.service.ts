import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Project } from '../models/Project';
import { Observable } from 'rxjs/Observable';
import { App } from './app';
import 'rxjs/add/operator/map';

@Injectable()
export class ProjectService {
  
  private projects: Project[] = [];
  private app: App = new App();
  private url = "project";

  constructor(private http: Http) {}  
  get() {
    this.http.get(this.app.url + this.url)
        .map(res => res.json())
        .subscribe(
          (projects) => {
            projects.forEach( (projectData: Object) => {
              var project: Project = new Project(projectData);
              this.projects.push(project);
          });
        }
    );
    return this.projects;
  }

  post(project) {
    return this.http.post(this.app.url + this.url, JSON.stringify(project), { headers: this.app.headers })
      .map(res => res.json());
  }

  getById(id) : Observable<Project> {
    return this.http.get(this.app.url + this.url + "/" + id)
      .map(res => <Project> res.json());
  }

  put(project) {
    return this.http
      .put(this.app.url + this.url + project._id, JSON.stringify(project))
      .map(res => <Project> res.json());
  }

  delete(project) {
    this.http
      .delete(this.app.url + this.url + project._id);
  }
}