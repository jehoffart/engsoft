import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { Subscription } from 'rxjs/Rx';

@Component({
    selector: 'project-list',
    templateUrl: '../../../../views/project/list.component.html',
    providers: [ ProjectService, AuthenticationService ]
})
export class ProjectListComponent implements OnInit {
    projects: Project[] = [];
    private subscription: Subscription;

    constructor(private _service: ProjectService, 
                private auth: AuthenticationService) {}

    ngOnInit() {
    	this.auth.checkCredentials();
      	this.projects = this._service.get();
    }

    private sortByWordLength = (a:any) => {
        return a.name.length;
    }

    delete(id) {
      this._service.delete(id).subscribe((res) => {
        window.location.href = "/project";
      });
    }
};