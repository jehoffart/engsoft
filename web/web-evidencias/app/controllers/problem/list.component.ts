import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Problem } from '../../models/problem';
import { ProblemService } from '../../services/problem.service';
import { Subscription } from 'rxjs/Rx';

@Component({
    selector: 'problem-list',
    templateUrl: '../../../../views/problem/list.component.html',
    providers: [ ProblemService, AuthenticationService ]
})
export class ProblemListComponent implements OnInit {
    problems: Problem[] = [];
    private subscription: Subscription; 
    
    constructor(private _service: ProblemService, 
                private auth: AuthenticationService) {}

    ngOnInit() {
    	this.auth.checkCredentials();
        this._service.get().subscribe(problems => this.problems = problems);
    }

    delete(id) {
      this._service.delete(id).subscribe((res) => {
        window.location.href = "/problem";
      });
    }
};