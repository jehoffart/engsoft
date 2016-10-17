import {Component, OnInit} from '@angular/core';
import 'rxjs/add/operator/map';
import {Http} from '@angular/http';
import {User} from '../models/User';

@Component({
    selector: 'user-edit',
    templateUrl: './views/user/form.component.html'
})
export class UserEditComponent implements OnInit {
    user: User[] = [];
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