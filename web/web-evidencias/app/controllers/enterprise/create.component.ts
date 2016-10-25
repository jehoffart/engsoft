import { Component, OnInit } from '@angular/core';
import { EnterpriseService } from '../../services/enterprise.service';
import { AuthenticationService } from '../../services/authentication.service';
import { Enterprise } from '../../models/Enterprise';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
    }

    onSubmit() {
      this.submitted = true;
      if(this.enterpriseForm.valid) {
        this._service.post(this.enterpriseForm.value).subscribe(enterprise => 
          this.router.navigate(['enterprise/show/' + enterprise._id]));
        }
      }
}