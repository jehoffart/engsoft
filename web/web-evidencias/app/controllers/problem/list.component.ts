import { Component, OnInit } from '@angular/core';
import { Problem } from '../../models/problem';
import { ProblemService } from '../../services/problem.service';
import { AuthenticationService } from '../../services/authentication.service';
import { ListController } from './../listcontroller';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: '../../../../views/problem/list.component.html',
    providers: [ ProblemService, AuthenticationService ]
})
export class ProblemListComponent extends ListController implements OnInit {
    
    constructor(protected route: ActivatedRoute, 
                protected router: Router,
                protected auth: AuthenticationService,
                protected _service: ProblemService) {
      super(route, router, auth, _service, 'problem');
    }

    ngOnInit() {
        this.GetList();
    }

    problemIsEnterprise(id) {
        if(!this.isEnterprise()) return false;
        return this.getLoginId() === id;
    }
};