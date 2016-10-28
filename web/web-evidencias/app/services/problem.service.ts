import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Problem } from '../models/Problem';

@Injectable()
export class ProblemService {
  
  private url: string = 'http://localhost:8080/problem/';
  private problems: Problem[] = [];

  constructor(private http: Http) {}
    
  get() {
    this.http.get(this.url)
        .map(res => res.json())
        .subscribe(
          (problems) => {
            problems.forEach( (problemData: Object) => {
              var problem: Problem = new Problem(problemData);
              this.problems.push(problem);
          });
        }
    );
    return this.problems;
  }

  post(problem) {
    return this.http
      .post(this.url, JSON.stringify(problem))
      .map(res => res.json());
  }

  getById(id) {
    return this.http.get(this.url + '/${id}')
      .map(res => res.json());
  }

  put(problem) {
    return this.http
      .post(this.url + '/${problem.id}', JSON.stringify(problem))
      .map(res => res.json());
  }
}