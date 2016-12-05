import {Component, OnInit} from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../models/Project';
import { AuthenticationService } from '../../services/authentication.service';
import { ShowController } from './../showcontroller';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: '../../../../views/project/show.component.html',
    providers: [ ProjectService, AuthenticationService ]
})
export class ProjectShowComponent extends ShowController implements OnInit {
    
    constructor(protected route: ActivatedRoute, 
                protected router: Router,
                protected auth: AuthenticationService,
                protected _service: ProjectService) {
      super(route, router, auth, _service, 'project');
      this.model = new Project();
    }

    ngOnInit() {
        this.GetModel();
    }
};