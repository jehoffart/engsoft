import {Component, OnInit} from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../models/Project';
import { User } from '../../models/User';
import { AuthenticationService } from '../../services/authentication.service';
import { UserService } from '../../services/user.service';
import { ShowController } from './../showcontroller';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: '../../../../views/project/show.component.html',
    providers: [ ProjectService, AuthenticationService, UserService ]
})
export class ProjectShowComponent extends ShowController implements OnInit {
    
    constructor(protected route: ActivatedRoute, 
                protected router: Router,
                protected auth: AuthenticationService,
                protected _service: ProjectService,
                protected userService: UserService) {
      super(route, router, auth, _service, 'project');
      this.model = new Project();
    }

    ngOnInit() {
        this.GetModel();
    }
};