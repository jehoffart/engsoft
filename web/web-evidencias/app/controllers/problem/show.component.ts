import { Component, OnInit } from '@angular/core';
import { Problem } from '../../models/problem';
import { ProblemService } from '../../services/problem.service';
import { AuthenticationService } from '../../services/authentication.service';
import { ShowController } from './../showcontroller';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: '../../../../views/problem/show.component.html',
    providers: [ ProblemService, AuthenticationService ]
})
export class ProblemShowComponent extends ShowController implements OnInit {
    
    constructor(protected route: ActivatedRoute, 
                protected router: Router,
                protected auth: AuthenticationService,
                protected _service: ProblemService) {
      super(route, router, auth, _service, 'problem');
      this.model = new Problem();
    }

    ngOnInit() {
        this.GetModel();
    }
};