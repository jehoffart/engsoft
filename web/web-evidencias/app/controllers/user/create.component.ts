import {Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { AuthenticationService } from '../../services/authentication.service';
import { User } from '../../models/User';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'user-create',
    templateUrl: '../../../../views/user/form.component.html',
    providers: [ UserService, AuthenticationService ]
})
export class UserCreateComponent implements OnInit {
    userForm: FormGroup;
    model: User = new User();
    submitted: boolean = false;

    constructor(private _service: UserService, 
                private formBuilder: FormBuilder,
                private auth: AuthenticationService,
                private route: ActivatedRoute, 
                private router: Router) {}

    ngOnInit() {
      this.auth.checkCredentials();

      this.userForm = this.formBuilder.group({
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
    }

    onSubmit() {
      this.submitted = true;
 
      if(this.userForm.valid) {
        this._service.post(this.userForm.value).subscribe(user => this.router.navigate(['user/show/' + user._id]));
      }
    }
}