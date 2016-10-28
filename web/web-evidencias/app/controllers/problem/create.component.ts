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
                private router: Router) {

      this.problemForm = this.formBuilder.group({
          Name: ['', Validators.required],
          Description: [''],
          Status: [''],
          MaxCost: ['', this.util.Coin],
          Categories: this.formBuilder.array([this.initCategories()])
      });
    }

    ngOnInit() {
      this.auth.checkCredentials();
    }

    onSubmit() {
      this.submitted = true;

      if(this.problemForm.valid) {
        for (let c of this.problemForm.value.Categories)
          this.model.addCategory(c.Category);

        this._service.post(this.problemForm.value).subscribe(problem => 
          this.router.navigate(['problem/show/' + problem._id]));
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
}