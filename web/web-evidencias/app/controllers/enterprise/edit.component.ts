import { Component, OnInit } from '@angular/core';
import { EnterpriseService } from '../../services/enterprise.service';
import { AuthenticationService } from '../../services/authentication.service';
import { Enterprise } from '../../models/enterprise';
import { Util } from '../../models/Util';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

    constructor(private _service: EnterpriseService, 
                private formBuilder: FormBuilder,
                private auth: AuthenticationService,
                private route: ActivatedRoute, 
                private router: Router) {

      this.enterpriseForm = this.formBuilder.group({
          Name: ['', Validators.required],
          CNPJ: ['', Validators.required],
          Login: ['', Validators.required],
          Password: ['', Validators.required],
          Description: [''],
          Website: ['']
      });
    }

    ngOnInit() {
      this.auth.checkCredentials();


      this.subscription = this.route.params.subscribe(
        (params: any) => {
          var id = params['id'];
          
          if(!!id) {
            this._service.getById(id).subscribe(enterprise => this.model = enterprise);
          }
        }
      );
    }

    onSubmit() {
      this.submitted = true;

      if(this.enterpriseForm.valid) {
        this._service.post(this.enterpriseForm.value).subscribe(enterprise => 
          this.router.navigate(['enterprise/show/' + enterprise._id]));
        }
      }
}