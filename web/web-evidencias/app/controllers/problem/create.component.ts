import { Component, OnInit } from '@angular/core';
import { ProblemService } from '../../services/problem.service';
import { AuthenticationService } from '../../services/authentication.service';
import { Problem } from '../../models/Problem';
import { Util } from '../../models/Util';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'problem-create',
    templateUrl: '../../../../views/problem/form.component.html',
    providers: [ ProblemService, AuthenticationService ]
})
export class ProblemCreateComponent implements OnInit {
    problemForm: FormGroup;
    model: Problem = new Problem();
    submitted: boolean = false;

    constructor(private _service: ProblemService, 
                private formBuilder: FormBuilder,
                private auth: AuthenticationService,
                private route: ActivatedRoute, 
                private router: Router, 
                private util: Util) {

      this.problemForm = this.formBuilder.group({
          Name: ['', Validators.required],
          Description: [''],
          Status: [''],
          MaxCost: ['', util.Coin]
      });
    }

    ngOnInit() {
      this.auth.checkCredentials();
    }

    onSubmit() {
      this.submitted = true;
      this._service.post(this.problemForm.value).subscribe(problem => 
        this.router.navigate(['problem-show/' + problem._id]));
    }
}