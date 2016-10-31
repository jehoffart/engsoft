import { Component, OnInit } from '@angular/core';
import { ProblemService } from '../../services/problem.service';
import { AuthenticationService } from '../../services/authentication.service';
import { Problem } from '../../models/Problem';
import { Util } from '../../models/Util';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

@Component({
    selector: 'problem-edit',
    templateUrl: '../../../../views/problem/form.component.html',
    providers: [ ProblemService, AuthenticationService ]
})
export class ProblemEditComponent implements OnInit {
    problemForm: FormGroup;
    model: Problem = new Problem();
    submitted: boolean = false;
    private subscription: Subscription;  
    private util: Util = new Util();

    constructor(private _service: ProblemService, 
                private formBuilder: FormBuilder,
                private auth: AuthenticationService,
                private route: ActivatedRoute, 
                private router: Router) {}

    ngOnInit() {
      this.auth.checkCredentials();

      this.subscription = this.route.params.subscribe(
        (params: any) => {
          var id = params['id'];
          
          if(!!id) {
            this._service.getById(id).subscribe(problem => this.model = problem);
          }
        }
      );

      this.problemForm = this.formBuilder.group({
          Name: ['', Validators.required],
          Description: [''],
          Status: [''],
          MaxCost: ['', this.util.Coin]
      });
    }

    onSubmit() {
      this.submitted = true;

      if(this.problemForm.valid) {
        this._service.post(this.problemForm.value).subscribe(problem => 
          this.router.navigate(['problem/show/' + problem._id]));
        }
      }
}