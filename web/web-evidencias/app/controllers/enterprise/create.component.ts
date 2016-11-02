import { Component, OnInit } from '@angular/core';
import { EnterpriseService } from '../../services/enterprise.service';
import { AuthenticationService } from '../../services/authentication.service';
import { Enterprise } from '../../models/Enterprise';
import { Util } from '../../models/Util';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'enterprise-create',
    templateUrl: '../../../../views/enterprise/form.component.html',
    providers: [ EnterpriseService, AuthenticationService ]
})
export class EnterpriseCreateComponent implements OnInit {
    enterpriseForm: FormGroup;
    model: Enterprise = new Enterprise();
    submitted: boolean = false;
    util: Util = new Util();

    constructor(private _service: EnterpriseService, 
                private formBuilder: FormBuilder,
                private auth: AuthenticationService,
                private route: ActivatedRoute, 
                private router: Router) {}

    ngOnInit() {
      //this.auth.checkCredentials("enterprise");

      this.enterpriseForm = this.formBuilder.group({
          Name: ['', Validators.required],
          CNPJ: ['', [Validators.required, this.util.ValidCnpj, Validators.maxLength(18)]],
          Login: ['', Validators.required],
          Password: ['', Validators.required],
          Description: [''],
          Website: ['', this.util.ValidURL],
          Categories: this.formBuilder.array([this.initCategories()])
      });
    }

    onSubmit() {
      this.submitted = true;
      
      if(this.enterpriseForm.valid) {
        
        this.model.Categories = [];
        for (let c of this.enterpriseForm.value.Categories)
          this.model.Categories.push(c.Category);
        
        this._service.post(this.model.attributes)
            .subscribe(enterprise => this.beforeSave(enterprise));
      }
    }

    initCategories() {
      return this.formBuilder.group({Category: ['', Validators.required]});
    }

    addCategories() {
      const control = <FormArray> this.enterpriseForm.controls['Categories'];
      control.push(this.initCategories());
    }

    removeCategories(i: number) {
      const control = <FormArray> this.enterpriseForm.controls['Categories'];
      control.removeAt(i);
    }

    beforeSave(enterprise) {
      this.router.navigate(['enterprise/show/' + enterprise._id]);
    }
}