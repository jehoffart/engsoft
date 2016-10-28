import {Component, OnInit} from '@angular/core';
import 'rxjs/add/operator/map';
import { UserService } from '../../services/user.service';
import { User } from '../../models/User';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'user-edit',
    templateUrl: '../../../../views/user/form.component.html',
    providers: [ UserService ]
})
export class UserCreateComponent implements OnInit {
    userForm: FormGroup;
    model: User;
    submitted: boolean = false;

    constructor(private _service: UserService, private formBuilder: FormBuilder) {
      this.userForm = this.formBuilder.group({
          Name: ['', Validators.required],
          Age: ['', Validators.required],
          Email: ['', Validators.required],
          City: ['', Validators.required],
          State: ['', Validators.required],
          Street: ['', Validators.required],
          About: ['', Validators.required],
          Login: ['', Validators.required],
          Password: ['', Validators.required]
      });
    }

    ngOnInit() {}

    onSubmit() {
      this.submitted = true;
      this._service.post(this.userForm.value);
    }
}