import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Project } from '../models/Project';

@Injectable()
export class ProjectService {
  
  private url: string = 'http://localhost:8080/project/';
  private projects: Project[] = [];

  constructor(private http: Http) {}
    
  get() {
    this.http.get(this.url)
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
    return this.http
      .post(this.url, JSON.stringify(project))
      .map(res => res.json());
  }

  getById(id) {
    return this.http.get(this.url + '/${id}')
      .map(res => res.json());
  }

  put(project) {
    return this.http
      .post(this.url + '/${project.id}', JSON.stringify(project))
      .map(res => res.json());
  }
}