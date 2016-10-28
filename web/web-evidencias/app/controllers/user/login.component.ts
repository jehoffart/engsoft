import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';
import { User } from '../../models/User';
import { LoginService } from '../../services/login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'login',
    templateUrl: '../../../../views/user/login.component.html',
    providers: [ LoginService ]
})
export class LoginComponent implements OnInit {
    userForm: FormGroup;
    model: User;
    submitted: boolean = false;

    constructor(private _service: LoginService, private formBuilder: FormBuilder) {
    	this.userForm = this.formBuilder.group({
      		Login: ['', Validators.required],
      		Password: ['', Validators.required],
      });
  	}

    ngOnInit() {}

  	onSubmit() {
      this.submitted = true;
    	this._service.post(this.model);
  	}
};