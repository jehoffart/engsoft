import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';
import { Problem } from '../models/Problem';
//import { ProblemService } from '../services/problem.service';

@Component({
    selector: 'problem-list',
    templateUrl: './views/problem/list.component.html'
})
export class ProblemListComponent implements OnInit {
    problems: Problem[] = [];
        
    constructor() {};

    ngOnInit() {
    	
    }
};