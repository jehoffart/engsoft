import {Component, OnInit} from '@angular/core';
import { ProblemService } from '../../services/problem.service';
import { AuthenticationService } from '../../services/authentication.service';
import { Problem } from '../../models/Problem';
import { Subscription } from 'rxjs/Rx';
import { ActivatedRoute } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'problem-show',
    templateUrl: '../../../../views/problem/show.component.html',
    providers: [ ProblemService, AuthenticationService ]
})
export class ProblemShowComponent implements OnInit {
    model: Problem = new Problem();
    private subscription: Subscription;

    constructor(private _service: ProblemService, 
                private auth: AuthenticationService,
                private route: ActivatedRoute) {}

    ngOnInit() {
//      this.auth.checkCredentials("problem");
      
      this.subscription = this.route.params.subscribe(
      (params: any) => {
        var id = params['id'];
        
        if(!!id) {
          this._service.getById(id).subscribe(problem => this.model = problem);
        }
          }
      );
    }

    delete(id) {
      this._service.delete(id).subscribe((res) => {
        window.location.href = "/problem";
      });
    }
}