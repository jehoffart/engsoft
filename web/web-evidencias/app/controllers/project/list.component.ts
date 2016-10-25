import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';

@Component({
    selector: 'project-list',
    templateUrl: '../../../../views/project/list.component.html',
    providers: [ ProjectService, AuthenticationService ]
})
export class ProjectListComponent implements OnInit {
    projects: Project[] = [];
    
    constructor(private _service: ProjectService, 
                private auth: AuthenticationService) {}

    ngOnInit() {
    	this.auth.checkCredentials();
      	this.projects = this._service.get();
    }
};