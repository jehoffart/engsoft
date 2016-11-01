import { Component, OnInit } from '@angular/core';
import { ProblemService } from '../../services/problem.service';
import { AuthenticationService } from '../../services/authentication.service';
import { Problem } from '../../models/Problem';
import { Util } from '../../models/Util';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
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
      this.auth.checkCredentials("problem");

      this.subscription = this.route.params.subscribe(
        (params: any) => {
          var id = params['id'];
          
          if(!!id) {
            this._service.getById(id)
                .subscribe(problem => this.initProblem(problem));
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

    initProblem(problem: Problem) {
      this.model = problem;

      for (let c of this.model.Categories)
          this.createCategories(c);
    }

    onSubmit() {
      this.submitted = true;

      if(this.problemForm.valid) {
        this.model.Categories = [];
        for (let c of this.problemForm.value.Categories)
          this.model.Categories.push(c.Category);

        this._service.put(this.model.attributes)
            .subscribe(problem => this.beforeSave(problem));
      }
    }

    initCategories() {
      return this.formBuilder.group({Category: ['', Validators.required]});
    }

    addCategories() {
      const control = <FormArray> this.problemForm.controls['Categories'];
      control.push(this.initCategories());
    }

    createCategories(category : string) {
      const control = <FormArray> this.problemForm.controls['Categories'];
      control.push(this.formBuilder.group({Category: [category, Validators.required]}));
    }

    removeCategories(i: number) {
      const control = <FormArray> this.problemForm.controls['Categories'];
      control.removeAt(i);
    }

    beforeSave(problem) {
      this.router.navigate(['problem/show/' + problem._id])
    }
}