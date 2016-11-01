import {Component, OnInit} from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { AuthenticationService } from '../../services/authentication.service';
import { Project } from '../../models/Project';
import { Subscription } from 'rxjs/Rx';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'project-show',
    templateUrl: '../../../../views/project/show.component.html',
    providers: [ ProjectService, AuthenticationService ]
})
export class ProjectShowComponent implements OnInit {
    model: Project = new Project();
    private subscription: Subscription;

    constructor(private _service: ProjectService, 
                private auth: AuthenticationService,
                private route: ActivatedRoute,
                private router: Router) {}

    ngOnInit() {
      this.auth.checkCredentials("project");
      
      this.subscription = this.route.params.subscribe(
      (params: any) => {
        var id = params['id'];
        
        if(!!id) {
          this._service.getById(id).subscribe(project => this.model = project);
        }
          }
      );
    }

    delete(id) {
      this._service.delete(id).subscribe((res) => {
        this.router.navigate(['project/']);
      });
    }
}