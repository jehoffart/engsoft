import { Component, OnInit } from '@angular/core';
import { ProblemService } from '../../services/problem.service';
import { AuthenticationService } from '../../services/authentication.service';
import { EnterpriseService } from '../../services/enterprise.service';
import { Problem } from '../../models/Problem';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { FormController } from './../formcontroller';

@Component({
    templateUrl: '../../../../views/problem/form.component.html',
    providers: [ ProblemService, AuthenticationService, EnterpriseService ]
})
export class ProblemFormComponent extends FormController implements OnInit {
   
    constructor(protected route: ActivatedRoute, 
                protected router: Router,
                protected auth: AuthenticationService,
                protected _service: ProblemService,
                protected formBuilder: FormBuilder,
                private enterpriseService: EnterpriseService) {
      super(route, router, auth, _service, formBuilder, 'problem');
      this.model = new Problem();
    }

    ngOnInit() {
        this.form = this.formBuilder.group({
            Name: ['', Validators.required],
            MaxCost: ['', [Validators.required, this.validation.ValidCoin]],
            Description: [''],
            Categories: this.formBuilder.array([]),
            Questions: this.formBuilder.array([])
        });

        this.error = this.errorObj.initError(this.form);
        this.GetModel();
        this.model.EnterpriseId = this.getLoginId();
    }    

    afterSave(data) {
        this.enterpriseService.addProblem(this.getLoginId(), data).subscribe(d => this.afterAddProblem(data));
    }

    afterAddProblem(data) {
        this.router.navigate([this.entry + '/show/' + data._id])
    }

    afterGetModel(data) {
        this.model = data;
        
        for(var i = 0; i < this.model.Categories.length; i++){
            this.addCategory(false);
        }

        for(var i = 0; i < this.model.Questions.length; i++){
            this.addQuestions(false);
        }
    }

    initCategory(add) {
        if(!this.model.Categories) this.model.Categories = new Array();
        if(add) this.model.Categories.push('');

        return this.formBuilder.group({
            Category: ['', Validators.required]
        });
    }

    addCategory(add) {
        const control = <FormArray> this.form.controls['Categories'];
        control.push(this.initCategory(add));
        this.error = this.errorObj.getError(this.form);
    }

    delCategory() {
      const control = <FormArray> this.form.controls['Categories'];
      control.removeAt(control.length - 1);
      this.model.Categories.pop();
      this.error = this.errorObj.getError(this.form);
    }

    initQuestions(add) {
        if(!this.model.Questions) this.model.Questions = new Array();
        if(add) this.model.Questions.push('');

        return this.formBuilder.group({
            Question: ['', Validators.required]
        });
    }

    addQuestions(add) {
        const control = <FormArray> this.form.controls['Questions'];
        control.push(this.initQuestions(add));
        this.error = this.errorObj.getError(this.form);
    }

    delQuestions() {
      const control = <FormArray> this.form.controls['Questions'];
      control.removeAt(control.length - 1);
      this.model.Questions.pop();
      this.error = this.errorObj.getError(this.form);
    }

    beforeSave() {}
}