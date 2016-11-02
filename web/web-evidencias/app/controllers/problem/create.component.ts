import { Component, OnInit } from '@angular/core';
import { ProblemService } from '../../services/problem.service';
import { AuthenticationService } from '../../services/authentication.service';
import { Problem } from '../../models/Problem';
import { Util } from '../../models/Util';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
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
    private util: Util = new Util();

    constructor(private _service: ProblemService,
                private formBuilder: FormBuilder,
                private auth: AuthenticationService,
                private route: ActivatedRoute,
                private router: Router) {}

    ngOnInit() {
      this.auth.checkCredentials("problem");

      this.problemForm = this.formBuilder.group({
          Name: ['', Validators.required],
          Description: [''],
          Status: [''],
          MaxCost: ['', this.util.ValidCoin],
          Categories: this.formBuilder.array([this.initCategories()]),
          Questions: this.formBuilder.array([this.initQuestions()])
      });
    }

    onSubmit() {
      this.submitted = true;

      if(this.problemForm.valid) {

        this.model.Categories = [];
        for (let c of this.problemForm.value.Categories)
          this.model.Categories.push(c.Category);

        this.model.Questions = [];
        for (let q of this.problemForm.value.Questions)
          this.model.Questions.push(q.Question);

        this._service.post(this.model.attributes)
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

    removeCategories(i: number) {
      const control = <FormArray> this.problemForm.controls['Categories'];
      control.removeAt(i);
    }

    initQuestions() {
      return this.formBuilder.group({Question: ['', Validators.required]});
    }

    addQuestions() {
      const control = <FormArray> this.problemForm.controls['Questions'];
      control.push(this.initQuestions());
    }

    removeQuestions(i: number) {
      const control = <FormArray> this.problemForm.controls['Questions'];
      control.removeAt(i);
    }

    beforeSave(problem) {
      this.router.navigate(['problem/show/' + problem._id])
    }
}