import {Component, OnInit} from '@angular/core';
import 'rxjs/add/operator/map';
import { UserService } from '../../services/user.service';
import { User } from '../../models/User';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

@Component({
	moduleId: module.id,
    selector: 'user-edit',
    templateUrl: '../../../../views/user/form.component.html',
    providers: [ UserService ]
})
export class UserEditComponent implements OnInit {
    userForm: FormGroup;
    model: User;
    submitted: boolean = false;
	private subscription: Subscription;	

    constructor(private _service: UserService, private formBuilder: FormBuilder, 
    				private route: ActivatedRoute, private router: Router) {}
    
    ngOnInit() {
		this.subscription = this.route.params.subscribe(
			(params: any) => {
				var id = params['id'];
				this._service.getById(id);
			
	      	this.userForm = this.formBuilder.group({
				Name: [this.model.Name, Validators.required],
				Age: [this.model.Age, Validators.required],
				Email: [this.model.Email, Validators.required],
				City: [this.model.City, Validators.required],
				State: [this.model.State, Validators.required],
				Street: [this.model.Street, Validators.required],
				About: [this.model.About, Validators.required],
				Login: [this.model.Login, Validators.required],
				Password: [this.model.Password, Validators.required]
	      	});
      		}
		);
    }

    onSubmit() {
      	this.submitted = true;
      	this._service.post(this.userForm.value).subscribe(() => {
	  		this.router.navigate(['']);
      	}, (err) => {
        	console.error(err);
      	});
	}
}