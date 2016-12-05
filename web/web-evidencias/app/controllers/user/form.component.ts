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
    }

    ngOnInit() {
      this.GetModel()
    }    

    afterSave(data) {
      this.router.navigate([this.entry + '/show/' + data._id])
    }

    beforeSave() {}

    afterGetModel() {}
}