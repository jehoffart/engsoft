import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/User';
import { AuthenticationService } from '../../services/authentication.service';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { FormController } from './../formcontroller';

@Component({
    templateUrl: '../../../../views/user/form.component.html',
    providers: [ UserService, AuthenticationService ]
})
export class UserFormComponent extends FormController implements OnInit {

    constructor(protected route: ActivatedRoute,
                protected router: Router,
                protected auth: AuthenticationService,
                protected _service: UserService,
                protected formBuilder: FormBuilder) {
      super(route, router, auth, _service, formBuilder, 'user');
      this.model = new User();
    }

    ngOnInit() {
        this.form = this.formBuilder.group({
            Name: ['', Validators.required],
            Age: ['', Validators.required],
            Email: ['', Validators.required],
            City: ['', Validators.required],
            State: ['', Validators.required],
            Street: ['', Validators.required],
            About: [''],
            Login: ['', Validators.required],
            Password: ['', Validators.required]
        });

        this.error = this.errorObj.initError(this.form);
        this.GetModel()
    }

    afterSave(data) {
        this.router.navigate([this.entry + '/show']);
    }

    beforeSave() {}

    GetModel() {
        this._service.getById(this.getLoginId()).subscribe(data => this.afterGetModel(data));
    }

    afterGetModel(data) {
        this.model = data;
    }
}