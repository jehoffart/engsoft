import { Component, OnInit } from '@angular/core';
import { EnterpriseService } from '../../services/enterprise.service';
import { AuthenticationService } from '../../services/authentication.service';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { FormController } from './../formcontroller';
import { Enterprise } from '../../models/enterprise';

@Component({
    templateUrl: '../../../../views/enterprise/form.component.html',
    providers: [ EnterpriseService, AuthenticationService ]
})
export class EnterpriseFormComponent extends FormController implements OnInit {
   
    constructor(protected route: ActivatedRoute, 
                protected router: Router,
                protected auth: AuthenticationService,
                protected _service: EnterpriseService,
                protected formBuilder: FormBuilder) {
      super(route, router, auth, _service, formBuilder, 'enterprise');
      this.model = new Enterprise();
    }

    ngOnInit() {
        this.form = this.formBuilder.group({
            Name: ['', Validators.required],
            CNPJ: ['', [Validators.required, Validators.maxLength(18), this.validation.ValidCnpj]],
            Description: [''],
            Website: ['', this.validation.Url],
            Password: ['', Validators.required],
            Login: ['', Validators.required],
            Categories: this.formBuilder.array([])
        });
    
        this.error = this.errorObj.initError(this.form);
        
        this.GetModel()
    }

    afterSave(data) {
        if(this.isLogged()) this.router.navigate([this.entry + '/show']);
        else this.router.navigate(['/login']);
    }

    afterGetModel(data) {
        this.model = data;
        for(var i = 0; i < this.model.Categories.length; i++){
            this.addCategory(false);
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
    
    beforeSave() {}
}