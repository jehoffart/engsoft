import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Enterprise } from '../models/Enterprise';

@Injectable()
export class EnterpriseService {
  
  private url: string = 'http://localhost:8080/enterprise/';
  private enterprises: Enterprise[] = [];
  private enterprise: Enterprise;

  constructor(private http: Http) {}
    
  get() {
    this.http.get(this.url)
        .map(res => res.json())
        .subscribe(
          (enterprises) => {
            enterprises.forEach( (enterpriseData: Object) => {
              var enterprise: Enterprise = new Enterprise(enterpriseData);
              this.enterprises.push(enterprise);
          });
        }
    );
    return this.enterprises;
  }

  post(enterprise) {
    this.http
      .post(this.url, JSON.stringify(enterprise))
      .map(res => res.json()).subscribe((value: Response) => {
        this.enterprise = <Enterprise> value.json();
      });  
    return this.enterprise;;
  }

  getById(id) : Enterprise{
    this.http.get(this.url + '/${id}')
      .map(res => res.json()).subscribe((value: Response) => {
        this.enterprise = <Enterprise> value.json();
      });  
    return this.enterprise;
  }

  put(enterprise) {
    this.http
      .post(this.url + '/${enterprise.id}', JSON.stringify(enterprise))
      .map(res => res.json()).subscribe((value: Response) => {
        this.enterprise = <Enterprise> value.json();
      });  
    return this.enterprise;;
  }
}