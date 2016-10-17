import {Component, OnInit} from '@angular/core';
import 'rxjs/add/operator/map';
import {Http} from '@angular/http';
import {Enterprise} from '../models/Enterprise';

@Component({
    selector: 'enterprise-edit',
    templateUrl: './views/enterprise/form.component.html'
})
export class EnterpriseEditComponent implements OnInit {
    enterprises: Enterprise[] = [];
    constructor(){
    };

    ngOnInit() {
    	/*this.http.get('/problem')
      	.map(res => res.json())
      	.subscribe(
	        (problems) => {
          	problems.forEach( (problemData: Object) => {
	            var problem: Problem= new Problem(problemData);
            	this.problems.push(problem);
          	});
        	}
      	);*/
    }
};