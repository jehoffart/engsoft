import {Component, OnInit} from '@angular/core';
import 'rxjs/add/operator/map';
import {Http} from '@angular/http';
import {Project} from '../models/project';

@Component({
    selector: 'project-list',
    templateUrl: './views/project/list.component.html'
})
export class ProjectListComponent implements OnInit {
    projects: Project[] = [];
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