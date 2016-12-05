import { Component } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { BaseController } from './../basecontroller';
import { Error } from '../../models/Error';

@Component({
    templateUrl: '../../../../views/user/login.component.html',
    providers: [ AuthenticationService ]
})
export class LoginComponent extends BaseController {

    private username: string;
    private password: string;
    private errorObj: Error = new Error();
    private form: FormGroup;
    private submitted: boolean = false;
    private error;
    private loginError: boolean = false;

    constructor(protected route: ActivatedRoute, 
                protected router: Router,
                protected auth: AuthenticationService,
                protected formBuilder: FormBuilder) {
        super(route, router, auth, undefined, 'login');
        
        this.form = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });

        this.error = this.errorObj.initError(this.form);
    }

    login() {
        this.submitted = true;
      
        if(!this.form.valid) {
            this.error = this.errorObj.getError(this.form);
            return;
        }

        this.auth.login(this.username, this.password)
        .subscribe((data) => {
            this.setLocalStorage(data);
        });
    }

    setLocalStorage(data) {
        if(data.success) {
            localStorage.setItem('token', data.token);
            localStorage.setItem('loginId', data.loginId);
            localStorage.setItem('type', data.type);
            this.router.navigate(['problem/']);
        } else {
            this.loginError = true;
        }
    }


}

