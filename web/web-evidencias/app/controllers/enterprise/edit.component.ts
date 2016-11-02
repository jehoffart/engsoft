import { Component, OnInit } from '@angular/core';
import { EnterpriseService } from '../../services/enterprise.service';
import { AuthenticationService } from '../../services/authentication.service';
import { Enterprise } from '../../models/enterprise';
import { Util } from '../../models/Util';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

@Component({
    selector: 'enterprise-edit',
    templateUrl: '../../../../views/enterprise/form.component.html',
    providers: [ EnterpriseService, AuthenticationService ]
})
export class EnterpriseEditComponent implements OnInit {
    enterpriseForm: FormGroup;
    model: Enterprise = new Enterprise();
    submitted: boolean = false;
    private subscription: Subscription;  
    util: Util = new Util();

    constructor(private _service: EnterpriseService, 
                private formBuilder: FormBuilder,
                private auth: AuthenticationService,
                private route: ActivatedRoute, 
                private router: Router) {}

    ngOnInit() {
      this.auth.checkCredentials("enterprise");


      this.subscription = this.route.params.subscribe((params: any) => {
        var id = params['id'];
          
        if(!!id) {
          this._service.getById(id)
              .subscribe(enterprise => this.initEnterprise(enterprise));
        }
      });

      this.enterpriseForm = this.formBuilder.group({
          Name: ['', Validators.required],
          CNPJ: ['', Validators.required],
          Login: ['', Validators.required],
          Password: ['', Validators.required],
          Description: [''],
          Website: ['', this.util.ValidURL]
      });
    }

    initEnterprise(enterprise) {
      this.model = enterprise;

      for (let c of this.model.Categories)
          this.createCategories(c);
    }

    onSubmit() {
      this.submitted = true;

      if(this.enterpriseForm.valid) {

        this.model.Categories = [];
        for (let c of this.enterpriseForm.value.Categories)
          this.model.Categories.push(c.Category);
        
        this._service.put(this.model.attributes)
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

    createCategories(category : string) {
      const control = <FormArray> this.enterpriseForm.controls['Categories'];
      control.push(this.formBuilder.group({Category: [category, Validators.required]}));
    }

    removeCategories(i: number) {
      const control = <FormArray> this.enterpriseForm.controls['Categories'];
      control.removeAt(i);
    }

    beforeSave(enterprise) {
      this.router.navigate(['enterprise/show/' + enterprise._id]);
    }
}