import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { AuthenticationService } from '../../services/authentication.service';
import { ListController } from './../listcontroller';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'project-list',
    templateUrl: '../../../../views/project/list.component.html',
    providers: [ ProjectService, AuthenticationService ]
})
export class ProjectListComponent extends ListController implements OnInit {
    
    constructor(protected route: ActivatedRoute, 
                protected router: Router,
                protected auth: AuthenticationService,
                protected _service: ProjectService) {
      super(route, router, auth, _service, 'project');
    }

    ngOnInit() {
        this.GetList();
    }

    GetList() {
        this._service.findByUser(this.getLoginId()).subscribe(data => this.list = data);
    }
};