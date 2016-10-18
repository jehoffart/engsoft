import {Component, OnInit} from '@angular/core';
import 'rxjs/add/operator/map';
import {Http} from '@angular/http';
import {Project} from '../../models/project';
import { ProjectService } from '../../services/project.service';

@Component({
    selector: 'project-list',
    templateUrl: '../../../../views/project/list.component.html',
    providers: [ ProjectService ]
})
export class ProjectListComponent implements OnInit {
    projects: Project[] = [];
    
    constructor(private _service: ProjectService) {};

    ngOnInit() {
      this.projects = this._service.get();
    }
};